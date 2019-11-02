//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
    this.matrix = this.createMatrix();
  }

  get rows() {
    return this.matrix;
  }

  createMatrix() {
    const matrixStringArr = this.matrixString.split("\n");
    const matrixArr = matrixStringArr.map(rowString =>
      rowString.split(" ").map(Number)
    );
    return matrixArr;
  }

  get columns() {
    const columns = this.matrix.reduce(
      (acc, curr) => {
        curr.forEach((currVal, currValIndex) => {
          acc[currValIndex].push(currVal);
        });
        return acc;
      },
      [...this.matrix[0].map(() => [])]
    );
    return columns;
  }
}
