const input = document.querySelector("#input")
const createButton = document.querySelector("#create_button")
const todoList = document.querySelector("#todo_list")

const createTodo = () => {
    const inputValue = input.value.trim()
    if (inputValue === "") {
        alert('нельзя добавлять пустоту')
        return
    }
    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    div.setAttribute('class', 'block_text')
    divButtons.setAttribute('class', ' div_buttons')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'delete'
    editButton.innerHTML = 'edit'

    deleteButton.onclick = () => div.remove()
    editButton.onclick = () => {
        const editText = prompt(`Изменить ${text.innerHTML}`).trim()
        editText === '' ? alert('нельзя менять на пустоту') : text.innerHTML = editText
    }

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)
    input.value = ''
    text.addEventListener("click", () => {
        text.classList.toggle('toggle')
    })
}
createButton.onclick = () => createTodo()
window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
})
