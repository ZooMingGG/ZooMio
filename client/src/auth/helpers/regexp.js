const shouldIncludeDigits = /\d/;
const shouldIncludeLowerCaseCharacter = /.*[a-z].*/;
const shouldIncludeUpperCaseCharacter = /.*[A-Z].*/;
const shouldIncludeSpecialCharacter = /.*\W.*/;
const shouldBeAtLeastEightCharactersLong = /^.{8,}/;

export {
  shouldIncludeDigits,
  shouldIncludeLowerCaseCharacter,
  shouldIncludeUpperCaseCharacter,
  shouldIncludeSpecialCharacter,
  shouldBeAtLeastEightCharactersLong
};
