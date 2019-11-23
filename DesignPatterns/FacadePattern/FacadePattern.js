function Task(name, priority, status, save) {
    this.name = name;
    this.priority = priority;
    this.status = status;
    this.save = save;
}

const TaskService = function () {
    return {
        markComplete: function (myTask) {
            myTask.status = "Completed";
        },
        saveTask: function (myTask) {
            console.log('Saving task: ' + myTask.name);
        },
        changePriority: function (myTask, priority) {
            console.log(`Changing ${myTask.name}'s priority from ${myTask.priority} to ${priority}`);
            myTask.priority = priority;
        }
    }
}();

const TaskServiceWrapper = function () {
    return {
        markCompleteAndSave: function (myTask) {
            TaskService.markComplete(myTask);
            if (task.status === 'Completed') {
                TaskService.changePriority(task, '10');
                TaskService.saveTask(task);
            }
        }

    }

}();

const task = new Task('Legacy Task', 2, 'inprogress', false);
TaskServiceWrapper.markCompleteAndSave(task);