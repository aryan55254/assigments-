/*Basic Promise

Create a promise that resolves after 3 seconds with the value "Hello, World!".
Use .then() to log the resolved value.*/
const fetchdata = new Promise((resolve, reject) => {
    const data = "aryan mishra"
    setTimeout(() => {
        if(data){resolve(data);}
        else{
            reject("no data")        }
    },3000);
});
fetchdata
.then((data)=>{console.log("the data is",data)})
.catch((error)=>{console.log("error",error)});