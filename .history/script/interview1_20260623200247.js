 //interview
 
 const button =document.getElementById('button-bar');
    const clickButton = document.getElementById('btn-1')
        clickButton.addEventListener('click',
            () => {
                button.style.backgroundColor = 
                    "blue";
            });




             const button2 =document.getElementById('button-bar2');
    const clickButton2 = document.getElementById('btn-2')
        clickButton2.addEventListener('click',
            () => {
                button2.style.backgroundColor = 
                    "blue";
            });


                  const button3 =document.getElementById('button-bar3');
    const clickButton3 = document.getElementById('btn-3')
        clickButton3.addEventListener('click',
            () => {
                button3.style.backgroundColor = 
                    "blue";
            });



                  const button4 =document.getElementById('button-bar4');
    const clickButton4 = document.getElementById('btn-4')
        clickButton4.addEventListener('click',
            () => {
                button4.style.backgroundColor = 
                    "blue";
            });


                  const button5 =document.getElementById('button-bar5');
    const clickButton5 = document.getElementById('btn-5')
        clickButton5.addEventListener('click',
            () => {
                button5.style.backgroundColor = 
                    "blue";
            });



                  const button6 =document.getElementById('button-bar6');
    const clickButton6 = document.getElementById('btn-6')
        clickButton6.addEventListener('click',
            () => {
                button6.style.backgroundColor = 
                    "blue";
            });



                  const button7 =document.getElementById('button-bar7');
    const clickButton7 = document.getElementById('btn-7')
        clickButton7.addEventListener('click',
            () => {
                button7.style.backgroundColor = 
                    "blue";
            });



                           const button8 =document.getElementById('button-bar8');
    const clickButton8 = document.getElementById('btn-8')
        clickButton8.addEventListener('click',
            () => {
                button8.style.backgroundColor = 
                    "blue";
            });



            function addInterview() {

    const job = [{
        id:1,
        company: "Mobile First Corp",
        title: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000"
    },{
        id=2,
        company: "WebFlow Agency",
        title: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: " Part-time",
        salary: " $80,000 - $120,000"

    }]
    let interviewJobs =
        JSON.parse(localStorage.getItem("interviewJobs")) || [];

    const exists = interviewJobs.find(function (item) {
        return item.company === job.company;
    });

    if (exists) {
        alert("Already added");
        return;
    }

    interviewJobs.push(job);

    localStorage.setItem(
        "interviewJobs",
        JSON.stringify(interviewJobs)
    );

    alert("Added to Interview tab");
}