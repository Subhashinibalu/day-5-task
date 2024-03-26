// RESUME IN JSON FORMAT



let resume=
    {
        "personaldetails": {
          "name": "SUBHASHINI BALASUBRAMANIAN",
          "email": "subhashiniulk@gmail.com",
          "phone": 93049033224,
        },
        "profilesummary":{
            "intro":"Self-motivated and hardworking person ",
            "experience":"fresher",
        },
        "education": [
          {
                "degree": "Bachelor of Engineering",
                "college": "Sona College Of Technology",
                "department": "ECE",
                "cgpa": 7.95
          },
            {
                "certification":"web designing",
                "organisation":"LIVE WIRE",
                "year":2023
            }
        ],
        "skills": 
          {
            "techkills":"HTML, CSS, JS",
            "softskills":"Open-minded team player, Fast learner, good communication skills"
            
          },
        "languages": ["Tamil" ,"Enlish"],
        "achievements": 
          {
            "tcstest": "Cleared TCS NQT- Cognitive test (Oct 2023) with a score of 74.97%.",
            "tamilaward":"Received the Appreciation Award for merit for the academic year 2018-2019",
            "speech":"Won 1st prize in most of the participated speech competitions at School level."
          }
        
      }

      console.log("MY RESUME DETAILS")
      console.log(resume);
      
      const data = Object.entries(resume);



//for loop
console.log("RESUME ITERATION USING FOR LOOP");

for(var ind=0;ind<data.length;ind++){
    console.log(data[ind]);
}

//for in loop

console.log("RESUME ITERATION USING FOR IN LOOP");

for(var i in data){
    console.log(data[i]);
}

//for of loop

console.log("RESUME ITERATION USING FOR OF LOOP");

for(var [key,value] of data){
    console.log(key,value)
}

//forEach loop

console.log("RESUME ITERATION USING FOREACH LOOP");

 data.forEach(([key,val])=>console.log(key,val));




  