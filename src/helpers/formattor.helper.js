import dayjs from 'dayjs';

export const rupiahFormat = (value, currency = 'Rp') => {
  if (value) {
    const reverse = value.toString().split('').reverse().join('');
    const reverseMatch = reverse.match(/\d{1,3}/g);
    return `${currency}. ${reverseMatch.join('.').split('').reverse().join('')}`;
  }
  return value
};

export const defaultFormatDate = (date) => {
  return dayjs(date).format('DD MMM YYYY, HH:mm');
};
