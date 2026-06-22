let data= Number(localStorage.getItem("re"))
    document.getElementById("counter").innerText=data;
    function rejected(){

        data=data+1;
        document.getElementById("counter").innerText=data;
        

    }