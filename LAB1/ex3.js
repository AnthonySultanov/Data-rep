// EX 3
// empty array to store tasks
const todolist = [];


const addTask = (task) => {
  // push the task to the todolist array
  todolist.push(task);
  console.log("=========== NEW TASK ===========");
  // return 
  return todolist.length;
}

// function to list all tasks in the todolist array
const listAllTasks = () => {
  // loop it through the array
  for (const task of todolist) {
    // show the current task
    console.log(`=========== CURRENT TASK ===========\n"${task}"`);
  }
}

// function to delete a task
const deleteTask = (task) => {
  
  const index = todolist.indexOf(task);
  if (index !== -1) {
    // if the task is found, delete it
    todolist.splice(index, 1);
    console.log(`=========== DELETED TASK ===========\nTask "${task}" has been deleted.`);
  } else {
    // if the task is not found display a message
    console.log(`Task "${task}" not found.`);
  }
  // return
  return todolist.length;
};

// ddd a task to the todolist
addTask("Buy groceries");
addTask("Clean the house");
addTask("Go to the gym");

// show all tasks
listAllTasks();

// delete a task
deleteTask("Clean the house");

// show all tasks
listAllTasks();

