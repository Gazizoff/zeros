module.exports = function zeros(expression) {
  let count2 = 0;
  let count5 = 0;
  if (expression.indexOf('*') < 0) {
      countZeros(expression);
  }
  else {
      let arr = expression.split('*');
      arr.map(item => countZeros(item));
  }

  function countZeros(str) {
      if (str[str.length - 2] == "!") {
          countZerosFactDouble(+str.slice(0, str.length - 2));
      }
      else {
          countZerosFactSingle(+str.slice(0, str.length - 1));
      }
  }

  function countZerosFactSingle(numb) {
      for (numb; numb >= 2; numb--) {
          let a = numb;
          if (a % 2 == 0) {
              while (a % 2 == 0) {
                  count2 += 1;
                  a = a / 2;
              }
              while (a % 5 == 0) {
                  count5 += 1;
                  a = a / 5;
              }
          }
          else if (a % 5 == 0) {
              while (a % 5 == 0) {
                  count5 += 1;
                  a = a / 5;
              }
          }
      }
  }

  function countZerosFactDouble(numb) {
      for (numb; numb >= 2; numb-=2) {
          let a = numb;
          if (a % 2 == 0) {
              while (a % 2 == 0) {
                  count2 += 1;
                  a = a / 2;
              }
              while (a % 5 == 0) {
                  count5 += 1;
                  a = a / 5;
              }
          }
          else if (a % 5 == 0) {
              while (a % 5 == 0) {
                  count5 += 1;
                  a = a / 5;
              }
          }
      }
  }
  if (count5 <= count2) {
      return count5;
  }
  else {return count2};
}