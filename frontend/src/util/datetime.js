export const dateToDatetimeFormat = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hourseFormat = `${hours < 10 ? "0" : ""}${hours}`;
  const minutesFormat = `${minutes < 10 ? "0" : ""}${minutes}`;
  return `${date.toDateString().slice(4)} ${hourseFormat}:${minutesFormat} ET`;
};
