     // first two number
     let firstNum = parseInt(prompt("Writer First number"));
     let secondNum = parseInt(prompt("Writer Second number"));
     let result;



     // last two number
     let thirdNum = parseInt(prompt("Writer Third number"));
     let fourNum = parseInt(prompt("Writer Four number"));
     let result2;

     // final answer store
     let result3;


     // Operator
     let operator = prompt("Add operator one")
     let operator2 = prompt("Add operator two")
     let operator3 = prompt("Add operator three")


     // operator check and perfrom
     if (operator == "-") {
         result = firstNum - secondNum;
     } else if (operator == "+") {
         result = firstNum + secondNum;
     } else if (operator == "*") {
         result = firstNum * secondNum;
     } else if (operator == "/") {
         result = firstNum / secondNum;

     }

     // operator 2
     if (operator2 == "-") {
         result2 = result - thirdNum;
     } else if (operator2 == "+") {
         result2 = result + thirdNum;
     } else if (operator2 == "*") {
         result2 = result * thirdNum;
     } else if (operator2 == "/") {
         result2 = result / thirdNum;
     }

     // operator 3
     if (operator3 == "-") {
         result3 = result2 - fourNum;
     } else if (operator3 == "+") {
         result3 = result2 + fourNum;
     } else if (operator3 == "*") {
         result3 = result2 * fourNum;
     } else if (operator3 == "/") {
         result3 = result2 / fourNum;
     }
     // print answer on Dom
     let value = document.getElementById('number').innerHTML = result3;
