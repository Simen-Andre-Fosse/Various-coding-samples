const input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for(let i = 0; i < input.length; i++){
 // console.log('i is ' +i);
 for(let j =0; j < vowels.length; j++){
   //console.log('J is ' +j);
   if(input[i] === vowels[j]){
     if(input[i] === 'e' || input[i] === 'u'){
       resultArray.push(input[i]+input[i]);
     } else{
       resultArray.push(input[i]);
     }
   }
 }
}
console.log(resultArray.join('').toUpperCase());
