function isPalindrome(str) {
    let strSemEspacos = "";
    for (let index = 0; index < str.length; index++) {
      if (str[index] !== " ") {
        strSemEspacos += str[index];
      }
    }
  
    let strEmMinusculo = strSemEspacos.toLowerCase();
  
    let strInvertido = "";
    for (let index = strEmMinusculo.length - 1; index >= 0; index--) {
      strInvertido += strEmMinusculo[index];
    }
  
    if (strEmMinusculo === strInvertido) {
      return true;
    } else {
      return false;
    }
  }
  
  function arrayMaxMin(arr) {
    let maiorNumero = arr[0];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > maiorNumero) {
        maiorNumero = arr[index];
      }
    }
  
    let menorNumero = arr[0];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] < menorNumero) {
        menorNumero = arr[index];
      }
    }
  
    let arrayMinMax = [menorNumero, maiorNumero];
    return arrayMinMax;
  }