document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    // Load tasks from localStorage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      taskList.innerHTML = '';
      tasks.forEach(task => {
        addTaskToList(task);
      });
    };
  
    // Save tasks to localStorage
    const saveTasks = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Add task to list
    const addTaskToList = (task) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button onclick="editTask('${task.id}')">Edit</button>
          <button onclick="deleteTask('${task.id}')">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    };
  
    // Add new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskId = Date.now().toString();
      const newTask = { id: taskId, text: taskText };
      tasks.push(newTask);
      saveTasks(tasks);
      addTaskToList(newTask);
      taskInput.value = '';
    };
  
    // Edit task
    window.editTask = (taskId) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskIndex = tasks.findIndex(task => task.id === taskId);
      if (taskIndex > -1) {
        const newText = prompt('Edit task:', tasks[taskIndex].text);
        if (newText) {
          tasks[taskIndex].text = newText;
          saveTasks(tasks);
          loadTasks();
        }
      }
    };
  
    // Delete task
    window.deleteTask = (taskId) => {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks = tasks.filter(task => task.id !== taskId);
      saveTasks(tasks);
      loadTasks();
    };
  
    // Event listener for adding task
    addTaskButton.addEventListener('click', addTask);
  
    // Event listener for pressing Enter
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    // Initial load
    loadTasks();
  });
  