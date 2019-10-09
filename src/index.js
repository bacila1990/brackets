module.exports = function check(str, bracketsConfig) {
  let row = str;
  for (let i = 0; i < bracketsConfig.length;) {
    const value = bracketsConfig[i].join('');
    if (row.includes(value)) {
      row = row.replace(value, '');
      i = 0;
    } else {
      i += 1;
    }
  }
  if (row.length === 0) {
    return true;
  }
  return false;
};
