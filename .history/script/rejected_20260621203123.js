let data= Number(localStorage.getItem("rejectedCount"))||0; 

    document.getElementById("counter").innerText=data;
    function rejected(){

        data=data+1;
        document.getElementById("counter").innerText=data;
        
 document.getElementById("button-bar").innerText = "Rejected";





    }