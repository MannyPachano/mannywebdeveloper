import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
register('./_ts-resolve.mjs', pathToFileURL(import.meta.dirname + '/'));
