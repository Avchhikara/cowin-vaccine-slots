module.exports = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
