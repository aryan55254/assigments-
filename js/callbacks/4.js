//good level
/*Create a task scheduler system that allows you to:

Add tasks to a queue.
Execute them with a delay.
Each task should be an operation that accepts a taskId and a callback.
The scheduler should execute the tasks one by one after a specified delay (simulated using setTimeout).
Requirements:
Write a TaskScheduler class that:
Has a method addTask to add tasks to a queue (you can simply use an array for the queue).
Has a method run that processes tasks from the queue, executing them one by one, with a 2-second delay between each task.
Each task should accept a taskId and call the provided callback with the taskId when it's done.*/
x=[];
function addtask(tasks){x.push(tasks);console.log(`${tasks.name}added to queue`)};
function runtask(myarr){for (let i =0; i<myarr.length;i++){
    setTimeout(() => {
        myarr[i]();console.log(`task${i+1} is completed`)
    },i*2000);
}};
function task1(){console.log("task 1 is running")};
function task2(){console.log("task 2 is running")};
function task3(){console.log("task 3 is running")};
addtask(task1);
addtask(task2);
addtask(task3);
runtask(x);