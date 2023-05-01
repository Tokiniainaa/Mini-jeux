const button =document.getElementById('button')
const form =document.getElementById('form')
const message =document.getElementById('message')
const link =document.getElementById('link')
const attempt=document.getElementById('attempt')

const numberToGuess= Math.floor(Math.random()*100);
let attempts=7;
button.onclick = function(){
    const submit=document.getElementById("put");
    if(submit.value != ""){
        if(submit.value < numberToGuess ){
            message.innerText='The number is more big  than  '+ submit.value;
            message.style.color='ORANGE';
        }else if(submit.value > numberToGuess ){
            message.innerText='The number is less than   '+ submit.value ;
            message.style.color='ORANGE'
        }
        if (attempts==0){
            message.innerText='You loose  ,you should found '+ numberToGuess;
            message.style.color="red";
            form.style.display='none';
            link.style.display='grid'
        }
        attempts--;
        attempt.innerText=attempts;
        if (attempts<3){
            attempt.style.color=("red")
        }
        if(submit.value == numberToGuess){
            message.innerText='PERFECT!,you have found the right number';
            message.style.color="green";
        }
}else{
    message.innerText=" The field is empty  , fill it please! ";
    message.style.color=("red");

}
}