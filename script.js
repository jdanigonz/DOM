import deleteIcon from "./componentes/deleteCom.js";
import checkComplete from "./componentes/checkCom.js";



(()=>{

    const btn = document.querySelector('[data-form-btn]')
    const createTask = (evento) =>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        // console.log(Input.value);
    const value = input.value
    const list = document.querySelector('[data-list]'); 
    const task = document.createElement('li');   //aqui estamos asignando para que creee una lista random
    task.classList.add('card'); //aqu le a;ado los estilos de ccs 
    input.value = '';
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task')
    titleTask.innerText  = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask); //

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent); //aqui estamos poniendo el div en la li
    task.appendChild(deleteIcon());
    list.appendChild(task); // aqui estoy colocando el li dentro del ul


    };
    btn.addEventListener('click', createTask);//siver para llamar
    
})();



