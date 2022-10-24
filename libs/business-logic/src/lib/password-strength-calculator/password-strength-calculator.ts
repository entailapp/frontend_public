import {ZxcvbnOptions, zxcvbn} from '@zxcvbn-ts/core';

import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';

// import zxcvbnEnPackage from '@zxcvbn-ts/language-en'

const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    // ...zxcvbnEnPackage.dictionary,
  },
  // translations: zxcvbnEnPackage.translations,
};
ZxcvbnOptions.setOptions(options);

/**
 * Calculate the strength of a password using the @zxcvbn-ts npm package.
 */
export function calculatePasswordStrength(password: string): number {
  const info = zxcvbn(password);
  return info.score;
}
