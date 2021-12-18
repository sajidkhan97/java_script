var num = window.prompt("Enter the number: ");
function findSum(num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
      result = result + i;
    }
    return result
  }
  console.log(`Sum of numebers from 1 to ${num} is ${findSum(num)}`)
