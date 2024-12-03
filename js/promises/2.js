/*Error Handling

Write a promise that rejects with an error message "Something went wrong".
Use .catch() to log the error.*/
const fetchdata = new Promise((resolve, reject) => {
    data = ""
    if(data){resolve(data)}
    else{reject("no data available")}
});
fetchdata.catch((error)=>{console.log(error,"something went wrong")});