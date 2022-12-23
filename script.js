const addBtn = document.querySelector('#addBtn');
const inputName = document.querySelector('#inputName');
const list = document.querySelector('#list');

addBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = inputName.value;
    list.append(newItem);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    newItem.append(delBtn);

    delBtn.addEventListener('click', function (){
        newItem.remove()
    })

    inputName.value = '';
})