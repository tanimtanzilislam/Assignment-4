let data1 = Number(localStorage.getItem("interviewCount")) || 0;


document.getElementById("counting").innerText = data1;

function increment() {

    data1 = data1 - 1;

    // save to localStorage
    localStorage.setItem("interviewCount", data1);

    // update UI
    document.getElementById("counting").innerText = data1;

    // button text change (correct property is innerText, not value)
    document.getElementById("button-bar").innerText = "Rejected";
}