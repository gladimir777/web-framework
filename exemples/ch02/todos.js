const todos = ['Walk the dog', 'Wather the plant', 'Sand the chairs'];

const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-btn');

const todoLists = document.getElementById('todos-list');

//Initialize the view
for (const todo of todos) {
  todoLists.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener('input', () => {
  const inputValue = addTodoInput.value;
  addTodoButton.disabled = inputValue.length < 3;
});

addTodoInput.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoButton.addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  todos.push(addTodoInput.value);
  addTodoInput.value = '';
  addTodoButton.disabled = addTodoInput.value.length < 3;
}

function renderTodoInReadMode(todo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = todo;
  const btn = document.createElement('button');
  btn.textContent = 'Done';

  span.addEventListener('dblclick', () => {
    console.log('span click');
    const index = todos.indexOf(todo);
    todoLists.replaceChild(
      renderTodoInEditMode(todo),
      todoLists.childNodes[index]
    );
  });

  btn.addEventListener('click', () => {
    const index = todos.indexOf(todo);
    removeTodo(index);
  });

  li.append(span);
  li.append(btn);
  return li;
}

function renderTodoInEditMode(todo) {
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';

  const input = document.createElement('input');
  input.value = todo;

  const li = document.createElement('li');
  li.append(input, cancelBtn, saveBtn);
  return li;
}

function removeTodo(index) {}
