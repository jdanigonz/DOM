
    const checkComplete =()=>{
        const i = document.createElement(`i`);
        i.classList.add('far', 'fa-check-square','icon');
        i.addEventListener('click',completeTask);
        return i;

    }


    //console.log(btn);
    const completeTask = (evento2)=>{
        const element = evento2.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    }










export default  checkComplete;
