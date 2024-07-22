// document.addEventListener('DOMContentLoaded', () => {
//     let student = document.getElementById('student-name');
//     let registerDate = document.getElementById('date');
//     let due= document.getElementById('due');
//     let addBtn = document.getElementById('add-btn');
//     let parent=document.getElementById('table-data');
//     let count=0;
//     addBtn.addEventListener('click', () => {
//        count =count+1;
//        let studentTr=document.createElement('tr');
//        let idH=document.createElement('th');
//        idH.innerText=count
//        let studentTd = document.createElement('td');
//        let registerDateTd = document.createElement('td');
//        let dueTd=document.createElement('td');
//        dueTd.innerText=due.value;
//        studentTd.innerText=student.value;
//        registerDateTd.innerText=registerDate.value;
//        studentTr.appendChild(idH);
//        studentTr.appendChild(studentTd);
//        studentTr.appendChild(registerDateTd);
//        studentTr.appendChild(dueTd);
//        parent.appendChild(studentTr);


//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    //handling event to add the student in local storage
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', studentData);
    function studentData() {
        let student = document.getElementById('student-name').value;
        let registerDate = document.getElementById('date').value;
        let due = document.getElementById('due').value;
        let id = new Date().getTime();
        let studentData = {
            id: id,
            name: student,
            date: registerDate,
            dueAmount: due,
        };
        let studentDataJson = JSON.stringify(studentData);
        localStorage.setItem(id.toString(), studentDataJson);
        alert('Student data saved successfully!');
        displayStudentData();

    }
    //delete functionality to delete data


    // Function to retrieve all student data from localStorage
    function getAllStudentsData() {
        let allStudents = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let studentDataJson = localStorage.getItem(key);
            let studentData = JSON.parse(studentDataJson);
            allStudents.push(studentData);
        }
        return allStudents;
    }


    function displayStudentData() {
        let students = getAllStudentsData();
        let tableBody = document.getElementById('table-data');


        // Create the delete icon element
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash';
        deleteIcon.style.color = 'red';  // Override color to red using inline style
        deleteIcon.setAttribute('aria-hidden', 'true');

        // Clear existing table rows
        tableBody.innerHTML = '';

        // Populate table rows with student data
        students.forEach(function (student) {
            let row = tableBody.insertRow();

            let idCell = row.insertCell(0);
            let nameCell = row.insertCell(1);
            let dateCell = row.insertCell(2);
            let dueCell = row.insertCell(3);
            let delCell = row.insertCell(4);

            idCell.innerText = student.id;
            nameCell.innerText = student.name;
            dateCell.innerText = student.date;
            dueCell.innerText = student.dueAmount;
            delBtn = document.createElement('button');
            delBtn.innerHTML = '<i class="fa fa-trash" style="color: #ad6565 !important;" aria-hidden="true"></i>';
            delBtn.addEventListener('click', () => {

                localStorage.removeItem(student.id.toString());
                row.remove();
                alert('Student data deleted successfully!');

            });
            delCell.appendChild(delBtn);

        });
    }

    // Call the displayStudentData function to initially populate the table
    displayStudentData();


});