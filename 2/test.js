var num = window.prompt("Enter the number: ");
function findSum(num) {
    let sum = 0;
    for(let i=1; i<num; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
  console.log(`Sum of numebers from 1 to ${num} is ${findSum(num)}`)