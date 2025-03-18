document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskType = document.getElementById('taskType').value;
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') return;
    
    const images = {
        Pets: 'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
        Placestovisit: 'https://fastly.picsum.photos/id/154/200/200.jpg?hmac=ljiYfN3Am3TR0-aMErtWNuSQm8RTYarrv2QJfmWG6Cw',
       Dratmosphere: 'https://fastly.picsum.photos/id/77/200/200.jpg?hmac=RaFJkrixMn3dR7INSPWcmjC7HCxmggmF5mTlMpyEHsQ'
    };
    
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${images[taskType]}" class="task-image" alt="Task">
        <span>${taskInput.value} (${taskType})</span>
        <button class="delete-btn">ลบ</button>
    `;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    li.querySelector('.delete-btn').addEventListener('click', function(event) {
        event.stopPropagation();
        if (confirm('ต้องการลบรายการนี้หรือไม่?')) {
            li.remove();
        }
    });
    
    taskList.appendChild(li);
    taskInput.value = '';
});