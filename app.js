const addAssignmentModal = document.getElementById('add-modal')
const addAssignmentBtn = document.getElementById('add-assignment');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.getElementById('cancel-btn');
const userInputs = addAssignmentModal.querySelectorAll('input');
const Tasks = [];
const addBtn = document.getElementById('add-btn');
const listRoot = document.getElementById('assignment-list');



const renderNewAssignment = (id,name,subject,date) => {
    const newAssignmentElement = document.createElement('li');
    newAssignmentElement.className = 'assignment-element';
    newAssignmentElement.innerHTML = `
    <div class="assignment-element-name">
        <p>${name}</p>
    </div>
    <div class="assignment-element-subject">
        <p>${subject}</p>
    </div>
    <div class="assignment-element-date">
        <p>${date}</p>
    </div>
    <div class="assignment-element-status">
    <input type="checkbox" id="checkbox" name="checkbox" value="checkbox">
    </div>
    `;
    listRoot.append(newAssignmentElement);
}





const toggleAssignmentModal = () => {
    addAssignmentModal.classList.toggle('visible');
    toggleBackdrop();
    
}
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const cancel = () => {
    toggleAssignmentModal();
}

const addAssignment = () => {
    const assignmentName = userInputs[0].value;
    const subjectName = userInputs[1].value;
    const dueDate = userInputs[2].value;

  
 
    const newAssignment = {
        id: Math.random().toString(),
        name: assignmentName,
        subject: subjectName,
        date: dueDate
    };

    Tasks.push(newAssignment);
    console.log(Tasks);
    toggleAssignmentModal();
    renderNewAssignment(newAssignment.id,newAssignment.name,newAssignment.subject,newAssignment.date);

}

addAssignmentBtn.addEventListener('click', toggleAssignmentModal);
cancelBtn.addEventListener('click', cancel);
addBtn.addEventListener('click', addAssignment);