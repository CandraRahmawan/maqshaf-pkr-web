export const rupiahFormat = (value) => {
  const reverse = value.toString().split("").reverse().join("");
  const reverseMatch = reverse.match(/\d{1,3}/g);
  return reverseMatch.join(".").split("").reverse().join("");
};
