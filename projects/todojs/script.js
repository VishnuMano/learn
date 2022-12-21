const btn = document.querySelector('button');
const newtask = document.querySelector('#newtask');
const ul = document.querySelector('ul');
const tasks = [];
btn.addEventListener('click', function() {
    while(ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
    tasks.push(newtask.value);
    tasks.forEach((task) => {
        let addedtask = document.createElement('li');
        addedtask.textContent = String(newtask.value);
        ul.appendChild(addedtask);
    })
})