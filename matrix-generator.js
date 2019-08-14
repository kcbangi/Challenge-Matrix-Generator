"use stric";

function matrixGenerator(rows, columns) {
  const array = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(Math.floor(Math.random() * 100));
    }
    row.sort((a, b) => {
      return a - b;
    });
    array.push(row);
  }
  array.sort((a, b) => {
    return a[0] - b[0];
  });
  return array;
}

module.exports = matrixGenerator;
