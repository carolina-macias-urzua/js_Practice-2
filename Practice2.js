let list =[];
let number = 0;

while (number < 20){
    number = number + 1;
  list.push(number);
}

console.log(list);
//Exercises 2--Part 1
for (let i = 0; i < list.length; i++){
    console.log(list[i]);
}

//Exercises 2--Part 2
for (let i = 0; i < list.length; i++){
    if (list[i] % 2 === 0){
        console.log(list[i]);
    }
}
//Exercises 2--Part 3
for (let i = 0; i < list.length; i++){
    if (list[i] === 10){
        console.log(list[i]);
    } else {
        console.log(list[i])
        break;
    }
    
    }