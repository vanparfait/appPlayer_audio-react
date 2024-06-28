export default function formatValue(val) {
  const currentMin = Math.trunc(val / 60);
  let currentSecond = Math.trunc(val % 60);

  if (currentSecond < 10) currentSecond = `0${currentSecond}`;
  return `${currentMin}:${currentSecond}`;
}
