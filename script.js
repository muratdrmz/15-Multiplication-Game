const num1=Math.round(Math.random()*10);
const num2=Math.round(Math.random()*10);

const correctAns=num1*num2;

const formEl=document.getElementById('form');
const scoreEl=document.getElementById('score');
const questionEl=document.getElementById('question');
const inputEl=document.getElementById('input');

// let score=0;

// SET getItem
// function updateLS(){
//  localStorage.setItem('score',JSON.stringify(score))
// }
// GETITEM
// let s=JSON.parse(localStorage.getItem(score))

let score=JSON.parse(localStorage.getItem('score'))
if(!score){
 score=0;
}

scoreEl.innerText=`score:${score}`
questionEl.innerText=`What is ${num1} multiply by ${num2}`

formEl.addEventListener('submit',()=>{
const userAnswer=+inputEl.value;
if(userAnswer===correctAns){
 score++;
 updateLocalS()
}else{
 score--;
 updateLocalS()
}
});

function updateLocalS(){
 localStorage.setItem('score',JSON.stringify(score))
}