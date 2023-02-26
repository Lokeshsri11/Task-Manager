const tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Added task: ${task}`);
}

function listTasks() {
    if (tasks.length > 0) {
        console.log("Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    } else {
        console.log("No tasks found");
    }
}

function removeTask(index) {
    if (index > 0 && index <= tasks.length) {
        const task = tasks.splice(index - 1, 1)[0];
        console.log(`Removed task: ${task}`);
    } else {
        console.log(`No task found at index ${index}`);
    }
}

const args = process.argv.slice(2);
const command = args[0];

if (command === "add") {
    const task = args[1];
    if (task) {
        addTask(task);
    } else {
        console.log("Please provide a task description");
    }
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    const index = parseInt(args[1]);
    if (!isNaN(index)) {
        removeTask(index);
    } else {
        console.log("Please provide a valid task index");
    }
} else {
    console.log("Invalid command. Usage: task-manager.js [add|list|remove]");
}
