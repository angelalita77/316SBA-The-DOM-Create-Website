// cache DOM elements 
const taskInput = document.getElementById("enterTask"); // Task entered by user
const addTaskBtn = document.getElementById("submitTask"); // The "Add Task" button
const taskList = document.getElementById("taskList"); //The list will be created

addTaskBtn.addEventListener('click', addTask)


//Function to retrieve task entered by user and then place task
// in list
function addTask(e) {
    e.preventDefault();
    
    // save user input into task
    const task = taskInput.value;

    // Checks if there is anything entered in text box
   if(task) {
    createTaskElement(task);
    taskInput.value = ""; //empty textbox after adding task
    taskInput.focus(); //keey cursor active in textbox after adding task
    
   } else { 
        // alert that nothing has been entered
     taskInput.value = alert('You need to enter a task.')
   }

}

function createTaskElement(task) {

    // create the <li></li> tags
    const listItem = document.createElement('li')
    //console.log(listItem)
    listItem.textContent = task;  // save the contents of task to listItem
    // add <li> element with task as a child to the <ul> list element
    taskList.appendChild(listItem);
    
}
