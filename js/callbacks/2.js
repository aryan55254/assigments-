/*Write a function called loadData that simulates loading data from a server. It should:

Use setTimeout to simulate a 3-second delay.
After the delay, call a callback function that displays a message like "Data loaded successfully!"
Use this function to simulate loading data and display a message when it's complete.*/
x = ["aryan" , "chawal" , "mehendi", "harmanpremi"];
function loadData(data,callback)
{
    setTimeout(()=>{callback(data);},3000)
}
function loaded(data){
    console.log("loaded data succesfully",data)
}
loadData(x,loaded);
