function maxLength (string, number) {
  return string.length <= number;
}
maxLength('', 140);

function randomInteger(min, max) {
  if (min >= 0 && max >= 0 && min <= max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  return NaN;
}
randomInteger (1, 8);
// источник learn.javascript.ru
