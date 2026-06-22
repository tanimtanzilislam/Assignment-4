let data= Number(localStorage.getItem("rejectedCount"))||0; 

    document.getElementById("counter").innerText=data;
    function rejected(){

        data=data+1;
        document.getElementById("counter").innerText=data;
        
 document.getElementById("button-bar").innerText = "Rejected";


 
let button1= document.getElementById('button-bar');
let clickButton1= document.getElementById('btn-1');


clickButton1.addEventListener('click',()=>{

    button1.style.backgroundColor="red";

});
    }