
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


    if(exists){
        alert("Already Added");
        return;
    }
    rejectedJobs.push(job);

    localStorage.setItem(
        "rejectedJobs",
        JSON.str

    )
}

