// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций
class TodoList {
    tasks = [];
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(task) {
        return (this.tasks = this.tasks.filter((item) => item !== task));
    }
    getTasks() {
        return this.tasks;
    }
}
const todoList = new TodoList();
todoList.addTask("ban"),
    todoList.addTask("ana"),
    todoList.addTask("shis"),
    console.log(todoList.removeTask("shis"), todoList.getTasks());
