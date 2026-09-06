# Video assets for project cards and case studies

Every project on the site uses the same set of files:

| File | Used by | Spec |
| :-- | :-- | :-- |
| `public/videos/<slug>-thumbnail.mp4` | Homepage card | 1280 px wide, 30 fps, H.264, ~1-2 MB |
| `public/videos/<slug>-thumbnail.webm` | Homepage card (smaller, browsers that support it) | 1280 px wide, VP9 |
| `public/images/<slug>-thumbnail.webp` | Card poster (first frame) | 1280 px wide |
| `public/videos/web-development-project-<slug>-<part>.mp4` | Case study carousel, one per slide | 1600 px wide, 6-10 s each |
| `public/images/<slug>-<part>.webp` | Carousel poster per slide | 960 px wide |

## 1. Record

Record a scroll-through of the live site in a 3360x2100 (2x) browser window, about 20-30 seconds,
top to bottom, no clicks. Log out of any CMS first so no admin bar is in the frame. Save it as
`~/Downloads/<slug>-homepage.mov`.

## 2. Inspect and choose crops

```bash
cd ~/Downloads
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -show_entries format=duration -of default=nw=1 <slug>-homepage.mov
```

Set `CROP` to trim what you don't want in the frame:

- Nothing to trim: `CROP="crop=iw-24:ih:0:0"` (drops the right-edge scrollbar only)
- WordPress admin bar visible (32 CSS px, so 64 px at 2x): `CROP="crop=iw-24:ih-64:0:64"`

## 3. Generate everything

```bash
cd ~/Downloads
SLUG=<slug>                # e.g. jonathan-zalzman
SRC=$SLUG-homepage.mov
CROP="crop=iw-24:ih:0:0"
OUT=~/Documents/GitHub/websites-by-manny/public/videos
IMG=~/Documents/GitHub/websites-by-manny/public/images

# Homepage card loop (full clip)
ffmpeg -y -i "$SRC" -vf "$CROP,scale=1280:-2:flags=lanczos,fps=30" -an \
  -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT/$SLUG-thumbnail.mp4"
ffmpeg -y -i "$SRC" -vf "$CROP,scale=1280:-2:flags=lanczos,fps=30" -an \
  -c:v libvpx-vp9 -crf 44 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 -pix_fmt yuv420p "$OUT/$SLUG-thumbnail.webm"
ffmpeg -y -ss 0.2 -i "$SRC" -frames:v 1 -vf "$CROP,scale=1280:-2:flags=lanczos" -c:v libwebp -quality 80 "$IMG/$SLUG-thumbnail.webp"

# Case study slides: three roughly equal segments. Adjust the start/length
# so each one starts at a natural section boundary.
seg() { # seg <start> <length-or-empty> <part-name>
  ffmpeg -y -ss "$1" -i "$SRC" ${2:+-t $2} -vf "$CROP,scale=1600:-2:flags=lanczos,fps=30" -an \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT/web-development-project-$SLUG-$3.mp4"
  ffmpeg -y -ss "$1" -i "$SRC" -frames:v 1 -vf "$CROP,scale=960:-2:flags=lanczos" -c:v libwebp -quality 80 "$IMG/$SLUG-$3.webp"
}
seg 0    8   intro
seg 8    8   middle
seg 16   ""  end
```

Then reference the files from `src/data/projects.ts` (card) and the page's `slides` array (carousel).

## Why these settings

- `crf 27` with the `slow` preset keeps UI text sharp on screen recordings at a fraction of the size.
- 30 fps is plenty for scrolling; 60 fps doubles the size for no visible gain in a small card.
- `-an` strips audio. `+faststart` lets the browser start playing before the file has finished downloading.
- Cards use `preload="none"` plus a poster, so nothing downloads until the card scrolls into view.
