import dayjs from 'dayjs';

export const rupiahFormat = (value, currency = 'Rp') => {
  const reverse = value.toString().split('').reverse().join('');
  const reverseMatch = reverse.match(/\d{1,3}/g);
  return `${currency}. ${reverseMatch.join('.').split('').reverse().join('')}`;
};

export const defaultFormatDate = (date) => {
  return dayjs(date).format('MM MMM YYYY, HH:mm');
};
