let input=document.getElementById('input');
buttons=document.querySelectorAll('button');
let screenval='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log(buttontext);
        if(buttontext=='C'){
            screenval='';
            input.value=screenval;
        }else if(buttontext=='='){
            screenval=eval(screenval);
            input.value=screenval;
        }
        else if(buttontext=='B'){
            screenval=screenval.slice(0,screenval.length-1);
            input.value=screenval;
        }
        else{
            screenval+=buttontext;
            input.value=screenval;
        }
    })
}