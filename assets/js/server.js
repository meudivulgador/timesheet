let tasks = document.querySelectorAll('#tasks li');
tasks.forEach((task) => {
    task.addEventListener('click', getTask);
});

function toggleButtonTasks() {
    getAllTasks = document.querySelectorAll('#tasks li');
    getAllTasks.forEach((all) => {
        all.classList.remove("active-item");
    });
}

function getTask(task) {
    toggleButtonTasks();
    let text_task = document.querySelector('#view-task-text');
    text_task.textContent = task.target.textContent;
    task.target.closest('li').classList.add("active-item");
    stop();
}