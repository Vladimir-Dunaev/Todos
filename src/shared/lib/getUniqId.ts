export const getUniqId = (function (start = 10) {
  return () => ++start;
}());