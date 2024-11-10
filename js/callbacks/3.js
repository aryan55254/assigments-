/*Create a function called fetchUser that:

Takes a userId and a callback function as arguments.
Uses setTimeout to simulate a 2-second delay in fetching user data.
After the delay, it should call the callback function with a mock user object, for example, { id: userId, name: "John Doe" }.
After defining fetchUser, use it to simulate fetching a user's data and display the result in the console once the data is retrieved.*/
x={id: "user", name: "John Doe"}
function fetchuser (userId,callback){
    setTimeout(() => {callback(userId);
        
    }, 2000);
}
function data(userId){
    console.log("user details are",userId);
}
fetchuser(x,data);