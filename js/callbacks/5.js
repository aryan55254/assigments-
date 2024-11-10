alljobs=[];
function addjob(jobs,delay){alljobs.push({jobs,delay});};
function runjob(myarr){for (let i =0; i<myarr.length;i++){
    setTimeout(() => { console.log(`job${i+1} has started`);
        myarr[i].jobs();console.log(`job${i+1} is completed`)
    },myarr[i].delay);
}};
function job1(){console.log("job 1 is running")};
function job2(){console.log("job 2 is running")};
function job3(){console.log("job 3 is running")};   
addjob(job1,2000);
addjob(job2,3000);
addjob(job3,4000);
runjob(alljobs);