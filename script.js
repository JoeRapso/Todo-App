const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoCounter = 0

function newTodo() {

  let todoprompt = prompt('add new todo')
  let todo = String(todoprompt)
  let createLiElement = document.createElement('LI')
  let liElementTextNode = document.createTextNode(todo)
  createLiElement.appendChild(liElementTextNode)
  list.appendChild(createLiElement)
  todoCounter = todoCounter + 1
  //console.log(todoCounter)
  let createSpanElement = document.createElement('span')
  let SpanElementTextNode = document.createTextNode(todoCounter)
  createSpanElement.appendChild(SpanElementTextNode)
  itemCountSpan.innerHTML= ''
  itemCountSpan.appendChild(createSpanElement)

}
