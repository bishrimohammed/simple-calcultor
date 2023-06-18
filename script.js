const btn=document.querySelectorAll('#btn');
var inpf = document.getElementById('field')
var opera=document.querySelectorAll('#oper');
var equal=document.getElementById('calculate');
var mov=document.getElementById('move_tog');
var mov1=document.getElementById('move_tog1');
var inv=document.getElementById('inverse');
var sinv=document.getElementById('sin');
var cosv=document.getElementById('cos');
var tanv=document.getElementById('tan');
var degre=document.getElementsByClassName('deg')[0];
var radian=document.getElementById('rad');
var ln=document.getElementById('lan');
var log=document.getElementById('log');
var fact=document.getElementById('fact');
var inputdis=document.querySelector('.display');

var inpv = inpf.value;
var op;

inpf.addEventListener('keyup',()=>{
   var value=inpf.value;
   var operator=value.substring(value.length-1);
   //console.log(value.indexOf('+')==-1);
   if(operator=='+' || operator=='-' || operator=='*' || operator=='/' ){
      
    inputdis.value='';
   }else{
       
     inputdis.value=eval(value);
   }
    if(value.indexOf('+')==-1  && value.indexOf('-')==-1 && value.indexOf('*')==-1 && value.indexOf('/')==-1){
           
           inputdis.value='';
       }
  // console.log(eval(value));
});

btn.forEach(button=>{
    button.addEventListener('click' ,function(){
  
        inpf.focus();
         var valu=button.innerText;
         inpf.value=inpf.value+""+valu;
         var value=inpf.value;
        // if(value.contain('x')){
             
        // }
         value=inpf.value.replace(/x/g,'*');
         console.log(value);
   var operator=value.substring(value.length-1);
   //console.log(value.indexOf('+')==-1);
   if(operator=='+' || operator=='-' || operator=='*' || operator=='/' ){
      
    inputdis.value='';
   }else{
       
     inputdis.value=eval(value);
   }
    if(value.indexOf('+')==-1  && value.indexOf('-')==-1 && value.indexOf('*')==-1 && value.indexOf('/')==-1){
           
           inputdis.value='';
       }
         
    });
});

document.getElementById('clear').addEventListener('click' , function(){
    inpf.value="";
    inputdis.value='';
    inpf.focus();
})



document.getElementById('dot').addEventListener('click' , function(){
    var inpvalue=inpf.value;
    inpf.focus();

    if(inpvalue.indexOf(".") !== -1){
        
    }else{
        inpf.value=inpf.value+""+".";
    }
    
})

opera.forEach(button=>{
    button.addEventListener('click', function(){
        var val=inpf.value;
        var lastopr=val.charAt(val.length-1 );
         op=this.innerText;
         inpf.focus();
        if(val!=""){
            if(lastopr=='+'||lastopr=='-'||lastopr=='-'||lastopr=='x'||lastopr=='/'){
               inpf.value=val.substring(0,val.length-1)+op;
               
                
            }else{
                
                inpf.value=inpf.value+' '+op+' ';
            }
        }
        inputdis.value='';
    })
})

equal.addEventListener('click', function(){
       let val=inpf.value;
       var opp=['x','/','+','-'];
       var op1="";
       if(val.indexOf('/') !==-1){
           op1='/';
       }else  if(val.indexOf('x') !==-1){
                op1='x';
       }else  if(val.indexOf('+') !==-1){
                op1='+';
        }else  if(val.indexOf('-') !==-1){
            op1='-';
        }
       var opa=val.indexOf(op1);
       var num1=val.substring(0,opa);
       var num2=val.substring(opa+1);
       var result;
       switch(op1){
           case '+' :
              num1= Number(num1);
              num2= Number(num2);
            result=num1+num2;
            inpf.value=result;
            break;
         case '-' :
            result=num1-num2;
            inpf.value=result;
            break;
         case 'x' :
            result=num1*num2;
            inpf.value=result;
            break;
         case '/' :
            result=num1/num2;
            inpf.value=result;
            break;
            

       }

})
mov1.addEventListener('click',function(){
   // mov.style.width='75%';
    var wid=mov.style.width;
    var numc=document.getElementById('num');
    if(mov.style.width=='75%'){
        mov.style.width='5%';
        numc.style.opacity='1'
    }else {
        mov.style.width='75%';
        numc.style.opacity='0.9'
    }
   if( document.getElementsByClassName('tog1')[0].style.visibility=='visible'){
    document.getElementsByClassName('tog1')[0].style.visibility='hidden';
   }else{
    document.getElementsByClassName('tog1')[0].style.visibility='visible';
   }
})



inv.addEventListener('click',function(){
    if(sinv.innerText=='sin'){
        sinv.innerHTML="sin<sup style='font-size=12px'>-1</sup>";
    }else{
        sinv.innerText='sin';
    }

    if(cosv.innerText=='cos'){
        cosv.innerHTML="cos<sup>-1</sup>";
    }else{
        cosv.innerText='cos';
    }

    if(tanv.innerText=='tan'){
        tanv.innerHTML="tan<sup >-1</sup>";
    }else{
        tanv.innerText='tan';
    }
    if(ln.innerHTML=='ln'){
        ln.innerHTML="e<sup >x</sup>"
    }else{
        ln.innerText='ln';
    }
    if(log.innerHTML=='log'){
        log.innerHTML="10<sup >x</sup>"
    }else{
        log.innerText='log';
    }
})
radian.addEventListener('click',function(){
    if(degre.innerText=='DEG'){
        degre.innerText='RAD';
        radian.innerText='DEG';
    }else{
        degre.innerText='DEG';
        radian.innerText='RAD';
    }
})
sinv.addEventListener('click',function(){
    
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    if(sinv.innerHTML=='sin'){
        if(degre.innerText=='RAD'){
            inpf.value=Math.sin(inpvvv);
        }else {
            var b=Math.sin(inpvvv*Math.PI/180);
            if(inpvvv==60||inpvvv==30 || inpvvv==300 || inpvvv==330 || inpvvv==360||inpvvv==150||inpvvv==210 || inpvvv==240){
                b=b*1000;
                b=Math.ceil(b);
                b=b/1000;
                inpf.value=b;
            }else if( inpvvv==180  || inpvvv==270 ){
                b=b*1000;
                b=Math.floor(b);
                b=b/1000;
                inpf.value=b;
                
            }else{
                inpf.value=b;
            }
           
        }
    }else{
          if(inpvvv<=1 && inpvvv>=-1){
            if(degre.innerText=='RAD'){
                inpf.value=Math.asin(inpvvv);
            }else {
                var v=(Math.asin(inpvvv)*180/Math.PI);
                console.log(v);
                if(v==30.000000000000004 || v==-59.997089068811974){
                    inpf.value=Math.floor(v);
                }else if(v==59.997089068811974 || v==-30.000000000000004){
                    inpf.value=Math.ceil(v);
                }else{
                    inpf.value=v;
                }
            }
          }else{
              inpf.value='invalid number';
          }
    }
})

cosv.addEventListener('click',function(){
    
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    if(cosv.innerHTML=='cos'){
        if(degre.innerText=='RAD'){
            inpf.value=Math.cos(inpvvv);
        }else {
            var b=Math.cos(inpvvv*Math.PI/180);
            if(inpvvv==60||inpvvv==30 || inpvvv==300 || inpvvv==330 || inpvvv==360){
                b=b*1000;
                b=Math.floor(b);
                b=b/1000;
                inpf.value=b;
            }else if( inpvvv==210 || inpvvv==240 || inpvvv==270 ){
                b=b*1000;
                b=Math.ceil(b);
                b=b/1000;
                inpf.value=b;
                
            }else{
                inpf.value=b;
            }
        }
    }else{
          if(inpvvv<=1 && inpvvv>=-1){
            if(degre.innerText=='RAD'){
                inpf.value=Math.acos(inpvvv);
            }else {
                var v=(Math.acos(inpvvv)*180/Math.PI);
                console.log(v);
                if(inpvvv==0.5 || inpvvv==0.866 || inpvvv==-0.5){
                    inpf.value=Math.floor(v);
                }else if(inpvvv==-0.866 ){
                    inpf.value=Math.ceil(v);
                }else{
                    inpf.value=v;
                }
            }
          }else{
              inpf.value='invalid number';
          }
    }
})

tanv.addEventListener('click',function(){
    
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    if(tanv.innerHTML=='tan'){
        if(degre.innerText=='RAD'){
            inpf.value=Math.tan(inpvvv);
        }else {
            var b=Math.tan(inpvvv*Math.PI/180);
            if(inpvvv==60||inpvvv==30 ){
               // b=b*1000;
               // b=Math.ceil(b);
              //  b=b/1000;
                inpf.value=b;
            }else if(inpvvv==180 || inpvvv==45 ||inpvvv==225 || inpvvv==315 ||inpvvv==360 ||inpvvv==135){
                b=Math.ceil(b);
                inpf.value=b;
            }else if(inpvvv==90 || inpvvv==270){
                inpf.value="error";
            }else{
                inpf.value=b;
            }
        }
    }else{
          
            if(degre.innerText=='RAD'){
                inpf.value=Math.acos(inpvvv);
            }else {
                var v=(Math.atan(inpvvv)*180/Math.PI);
                console.log(v);
                if(inpvvv==-0.577  || inpvvv==-1.732){
                    inpf.value=Math.floor(v);
                }else if(inpvvv==0.577 || inpvvv==1.732  ){
                    inpf.value=Math.ceil(v);
                }else{
                    inpf.value=v;
                }
            }
          
    }
})
ln.addEventListener('click',function(){
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    if(ln.innerText=='ln'){
        inpf.value=Math.log(inpvvv);
    }else{
        inpf.value=Math.exp(inpvvv);
    }
    
})
log.addEventListener('click',function(){
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    if(log.innerText=='log'){
        inpf.value=Math.log10(inpvvv);
    }else{
        inpf.value=Math.pow(10,inpvvv);
    }
    
})

fact.addEventListener('click',function(){
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    var res=1;
    for(let i=inpvvv;i>0;i--){
        res=res*i;
    }
    inpf.value=res;
})
document.getElementById('pi').addEventListener('click',function(){
    var inpvvv= inpf.value;
    inpvvv=Number(inpvvv);
    inpf.value=Math.PI;
})

document.getElementById('sqt').addEventListener('click',function(){
    var num1= inpf.value;
   // inpvvv=Number(inpvvv);
    console.log(num1);
    inpf.focus();
    if(num1.indexOf('^')==-1){
        inpf.value=inpf.value+'^';
    }
    inpf.addEventListener('keyup',calls);
    function calls(){
         var inpv1=inpf.value;
    var num2=inpv1.substring(inpv1.indexOf('^')+1);
    var inpf2 = document.getElementById('field1');
    inpf2.value=Math.pow(num1,num2);
    console.log(num2);
    if(inpf.value.indexOf('^')==-1){
        inpf.removeEventListener('keyup',calls);
        inpf2.value="";
    }
    }
   
})

const buttons = document.querySelector('.rip')


    buttons.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        console.log(x)
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })

    
