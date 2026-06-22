let data = Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data;

function rejected1() {

    data = data + 1;

    localStorage.setItem("rejectedCount", data);

    document.getElementById("counter").innerText = data;

    const statusButton = document.getElementById("button-bar");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}



let data2 = Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data;

function rejected2() {

    data2 = data2 + 1;

    localStorage.setItem("rejectedCount", data2);

    document.getElementById("counter").innerText = data2;

    const statusButton = document.getElementById("button-bar2");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}


let data3 = Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data3;

function rejected3() {

    data3 = data3 + 1;

    localStorage.setItem("rejectedCount", data3);

    document.getElementById("counter").innerText = data3;

    const statusButton = document.getElementById("button-bar3");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}




// for card 4

let data4 = Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data4;

function rejected4() {

    data3 = data3 + 1;

    localStorage.setItem("rejectedCount", data4);

    document.getElementById("counter").innerText = data4;

    const statusButton = document.getElementById("button-bar4");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}

// for card 5

let data5 = Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data5;

function rejected5() {

    data5 = data3 + 1;

    localStorage.setItem("rejectedCount", data4);

    document.getElementById("counter").innerText = data4;

    const statusButton = document.getElementById("button-bar4");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}










