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

function movetoRejected(id){

    let interviewJos = JSON.parse(localStorage.getItem("interviewJobs"))|| [];
    const job = interview
}
