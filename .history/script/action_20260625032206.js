// action.js
function addInterview(id){


    const job =jobs.find(function(item){

        return item.id===id;
    });


    let interviewJobs =JSON.parse(localStorage.getItem("interviewJobs"))||[];

const exists =interviewJobs.find(function(item){
    return item.id ===id;
});

if(exists){
    alert("Already Added");
    return;
}

interviewJobs.push(job);

localStorage.setItem(
    "interviewJobs",
    JSON.stringify(interviewJobs)
);
  increment();
}


function addRejected(id){
    const job=jobs.find(function(item){
        return item.id===id;
    });


 let rejectedJobs =JSON.parse(localStorage.getItem("rejectedJobs"))||[];

    const exists =rejectedJobs.find(function(item){
    return item.id ===id;
});


    if(exists){
        alert("Already Added");
        return;
    }
    rejectedJobs.push(job);

    localStorage.setItem(
        "rejectedJobs",
        JSON.stringify(rejectedJobs)

    );

    rejected();
}



function markRejected(id){
    addRejected(id);
    document.getElementById(
        `button-bar${id===1?"":id}`
    ).innerText="REJECTED";
}

function moveToRejected(id){

    let interviewJobs =
    JSON.parse(localStorage.getItem("interviewJobs")) || [];

    const job =
    interviewJobs.find(item => item.id === id);

    interviewJobs =
    interviewJobs.filter(item => item.id !== id);

    localStorage.setItem(
        "interviewJobs",
        JSON.stringify(interviewJobs)
    );

    let rejectedJobs =
    JSON.parse(localStorage.getItem("rejectedJobs")) || [];

    rejectedJobs.push(job);

    localStorage.setItem(
        "rejectedJobs",
        JSON.stringify(rejectedJobs)
    );

    // counter update
    localStorage.setItem(
        "interviewCount",
        interviewJobs.length
    );

    localStorage.setItem(
        "rejectedCount",
        rejectedJobs.length
    );

    location.reload();
}
function moveToInterview(id){

    let rejectedJobs =
    JSON.parse(localStorage.getItem("rejectedJobs")) || [];

    const job =
    rejectedJobs.find(item => item.id === id);

    rejectedJobs =
    rejectedJobs.filter(item => item.id !== id);

    localStorage.setItem(
        "rejectedJobs",
        JSON.stringify(rejectedJobs)
    );

    let interviewJobs =
    JSON.parse(localStorage.getItem("interviewJobs")) || [];

    interviewJobs.push(job);

    localStorage.setItem(
        "interviewJobs",
        JSON.stringify(interviewJobs)
    );

    // counter update
    localStorage.setItem(
        "interviewCount",
        interviewJobs.length
    );

    localStorage.setItem(
        "rejectedCount",
        rejectedJobs.length
    );

    location.reload();
}