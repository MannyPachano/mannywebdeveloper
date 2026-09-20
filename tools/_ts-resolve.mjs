/** Node's ESM resolver needs file extensions. The data files import
 *  '../config' without one, so add .ts when a relative specifier has no
 *  extension. Avoids a build step and works on any platform. */
export async function resolve(specifier, context, next) {
  if (/^\.{1,2}\//.test(specifier) && !/\.[a-z]+$/i.test(specifier)) {
    try {
      return await next(specifier + '.ts', context);
    } catch {
      /* fall through to the normal resolver */
    }
  }
  return next(specifier, context);
}
