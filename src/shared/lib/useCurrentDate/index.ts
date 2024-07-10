export default function() {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth();
  const day = dt.getDate();

  return {
    year,
    month,
    day
  }
}
