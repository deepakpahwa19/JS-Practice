const Task = function (task) {
    this.task = task;
}

Task.prototype.save = function () {
    console.log(this.task + ' saving');
}

Task.prototype.complete = function () {
    console.log(this.task + ' completing');
}

module.exports = Task;