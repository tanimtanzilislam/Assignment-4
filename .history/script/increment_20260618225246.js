 let data1=0;
   
   document.getElementById("counting").innerText=data1;
   function increment(){
    data1=data1+1;
    document.getElementById("counting").innerText=data1;
    document.getElementById("button-bar").value="Applied"


       const button =
            document.getElementById('button-bar');
    const clickButton = document.getElementById('btn-1')
        clickButton.addEventListener('click',
            () => {
                button.style.backgroundColor = 
                    "blue";
            });
   }
