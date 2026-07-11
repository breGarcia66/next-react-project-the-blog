import { makeRandomString } from './make-random-string';
import slugify from 'slugify';

export const makeSlugFromText = (text: string) => {
  const slug = slugify(text, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  return `${slug}-${makeRandomString()}`;
};

