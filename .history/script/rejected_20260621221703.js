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

    localStorage.setItem("rejectedCount", data2);

    document.getElementById("counter").innerText = data3;

    const statusButton = document.getElementById("button-bar2");

    statusButton.innerText = "Rejected";
    statusButton.style.backgroundColor = "red";
    statusButton.style.color = "white";
}







