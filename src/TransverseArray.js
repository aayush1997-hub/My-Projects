import React from "react";

export default class TransverseArray extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [[1, 2, 3, 4, 5], [1, 4, 5, 6, 7], [5, 7, 8, 9, 6]]
    };
  }

  transverseArray = arr => {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr[0].length; i++) {
      for (var j = 0; j < arr.length; j++) {
        arr1.push(arr[j][i]);
      }
      arr2.push(arr1);
      arr1 = [];
      continue;
    }
    return arr2;
  };

  render() {
    var transversedArray = this.transverseArray(this.state.arr);
    return (
      <div>
        <p>Array before transversing : </p>
        <ol>
          {this.state.arr.map((value, key) => {
            return <li>{value}</li>;
          })}
        </ol>
        <p>Array after transversing :</p>
        <ol>
          {transversedArray.map((value, key) => {
            return <li>{value}</li>;
          })}
        </ol>
      </div>
    );
  }
}
