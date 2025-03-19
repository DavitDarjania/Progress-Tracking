import apiObj from "./api.js"

let getDepartmentArray
let getPriorityArray
let getEmployeesArray
let filterApiAddingh1 = document.querySelector('.filter-hidden1')
let filterApiAddingh2 = document.querySelector('.filter-hidden2')
let filterApiAddingh3 = document.querySelector('.filter-hidden3')

let filterButtonDep = document.querySelector('.department')
let filterButtonPri = document.querySelector('.priority')
let filterButtonEmp= document.querySelector('.employee')


async function getAsyncElement(){

    getDepartmentArray = await apiObj.getDepartments()
    
    getDepartmentArray.forEach((element) => {
        filterApiAddingh1.insertAdjacentHTML("beforeend", `
                <label class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name}</p>
                </label>`);
    });

    getPriorityArray = await apiObj.getPriority()

    getPriorityArray.forEach((element) => {
        filterApiAddingh2.insertAdjacentHTML("beforeend", `
                <label class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name}</p>
                </label>`);
    });

    getEmployeesArray = await apiObj.getEmployees()

    getEmployeesArray.forEach((element) => {
        filterApiAddingh3.insertAdjacentHTML("beforeend", `
                <label class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name} ${element.surname}</p>
                </label>`);
    });

}

filterButtonDep.addEventListener('click', () => {
    if(filterApiAddingh1.classList.contains('d-flex')){
        filterApiAddingh1.classList.remove('d-flex')
    }
    else{
        filterApiAddingh1.classList.add('d-flex')
    }
    filterApiAddingh2.classList.remove('d-flex')
    filterApiAddingh3.classList.remove('d-flex')
})
filterButtonPri.addEventListener('click', () => {
    if(filterApiAddingh2.classList.contains('d-flex')){
        filterApiAddingh2.classList.remove('d-flex')
    }
    else{
        filterApiAddingh2.classList.add('d-flex')
    }
    filterApiAddingh1.classList.remove('d-flex')
    filterApiAddingh3.classList.remove('d-flex')
})
filterButtonEmp.addEventListener('click', () => {
    if(filterApiAddingh3.classList.contains('d-flex')){
        filterApiAddingh3.classList.remove('d-flex')
    }
    else{
        filterApiAddingh3.classList.add('d-flex')
    }
    filterApiAddingh2.classList.remove('d-flex')
    filterApiAddingh1.classList.remove('d-flex')
})
getAsyncElement()