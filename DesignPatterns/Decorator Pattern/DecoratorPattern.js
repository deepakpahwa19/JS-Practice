const Task = require('../Task');

const UrgentTask = function (task, priority) {
    Task.call(this, task);
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function () {
    console.log('Notifying ... Urgent task');
}
UrgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

const urgentTask = new UrgentTask('Urgent task', 1);
urgentTask.save();
urgentTask.complete();

const myTask = new Task('Legacy Task');
myTask.save();