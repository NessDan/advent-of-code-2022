import data from "./data.js";
import { findMatchingChar, pointMapping } from "./shared.js";

const splitString = (strToSplit) => {
  const firstHalf = strToSplit.substr(0, strToSplit.length / 2);
  const secondHalf = strToSplit.substr(
    strToSplit.length / 2,
    strToSplit.length
  );

  return [firstHalf, secondHalf];
};

let pointCounter = 0;

data.forEach((str) => {
  const [fh, sh] = splitString(str);
  const matchingChar = findMatchingChar(fh, sh);
  const point = pointMapping[matchingChar];
  pointCounter += point;
});

console.log(pointCounter);
