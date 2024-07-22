document.addEventListener('DOMContentLoaded', () => {
    let student = document.getElementById('student-name');
    let registerDate = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    
    addBtn.addEventListener('click', () => {
        console.log(student.value);
        console.log(registerDate.value);
    });
});