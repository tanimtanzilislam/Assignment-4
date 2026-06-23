let data2 =
    Number(localStorage.getItem("rejectedCount")) || 0;

document.getElementById("counter").innerText = data2;

function rejected() {

    data2++;

    localStorage.setItem("rejectedCount", data2);

    document.getElementById("counter").innerText = data2;
}