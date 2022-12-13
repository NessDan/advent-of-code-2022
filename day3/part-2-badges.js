import data from "./data.js";
import {
  findAllMatchingChars,
  findMatchingChar,
  pointMapping,
} from "./shared.js";

let elfGroups = [];

for (let i = 0; i < data.length; i += 3) {
  elfGroups.push(data.slice(i, i + 3));
}

const total = elfGroups.reduce((acc, group) => {
  const elf1 = group[0];
  const elf2 = group[1];
  const elf3 = group[2];

  const matchingChars = findAllMatchingChars(elf1, elf2);

  const badge = findMatchingChar(matchingChars, elf3);

  acc += pointMapping[badge];
  return acc;
}, 0);

console.log(total);
