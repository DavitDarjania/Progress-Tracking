import apiObj from "./api.js"

let getDepartmentArray
let getPriorityArray
let getEmployeesArray
let getStatusesArray
let getAllTasksArray
let buttonDep = document.querySelector(".selecting_button1")
let buttonPri = document.querySelector(".selecting_button2")
let buttonEmp = document.querySelector(".selecting_button3")
let filterApiAddingh1 = document.querySelector('.filter-hidden1')
let filterApiAddingh2 = document.querySelector('.filter-hidden2')
let filterApiAddingh3 = document.querySelector('.filter-hidden3')

let filterButtonDep = document.querySelector('.department')
let filterButtonPri = document.querySelector('.priority')
let filterButtonEmp= document.querySelector('.employee')

let filterselectDep = document.querySelector('.selecting-div1')
let filterselectPri = document.querySelector('.selecting-div2')
let filterselectEmp = document.querySelector('.selecting-div3')

let filterNameDep = document.querySelector('.filter_name1')
let filterNamePri = document.querySelector('.filter_name2')
let filterNameEmp = document.querySelector('.filter_name3')

let assignmentHeaderYel = document.querySelector('.cards_header1')
let assignmentHeaderOra = document.querySelector('.cards_header2')
let assignmentHeaderPink = document.querySelector('.cards_header3')
let assignmentHeaderBlue = document.querySelector('.cards_header4')





async function getAsyncElement(){

    getDepartmentArray = await apiObj.getDepartments()
    
    getDepartmentArray.forEach((element) => {
        filterselectDep.insertAdjacentHTML("beforebegin", `
                <label data-indicator="${element.id}" class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name}</p>
                </label>`);
    });
    filterApiAddingh1.querySelectorAll("label").forEach((element) => {
        console.log(element.dataset)
    })

    getPriorityArray = await apiObj.getPriority()

    getPriorityArray.forEach((element) => {
        filterselectPri.insertAdjacentHTML("beforebegin", `
                <label class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name}</p>
                </label>`);
    });

    getEmployeesArray = await apiObj.getEmployees()

    getEmployeesArray.forEach((element) => {
        filterselectEmp.insertAdjacentHTML("beforebegin", `
                <label class="custom-checkbox mb-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  <p>${element.name} ${element.surname}</p>
                </label>`);
    });

    getStatusesArray = await apiObj.getAllStatuses()

    getStatusesArray.forEach((element) => {
        element.id == 1 ? assignmentHeaderYel.insertAdjacentHTML("afterbegin", `<h5 class="text-white">${element.name}</h5>`) :
        element.id == 2 ? assignmentHeaderOra.insertAdjacentHTML("afterbegin", `<h5 class="text-white">${element.name}</h5>`) : 
        element.id == 3 ? assignmentHeaderPink.insertAdjacentHTML("afterbegin", `<h5 class="text-white">${element.name}</h5>`) :
        element.id == 4 ? assignmentHeaderBlue.insertAdjacentHTML("afterbegin", `<h5 class="text-white">${element.name}</h5>`) : console.log("Nothing");
    });

    getAllTasksArray = await apiObj.getAllTasks()
    function getTaskFunc(){
        getAllTasksArray.forEach((element) => {
        const dateStr = element.due_date;
        const date = new Date(dateStr);

        const georgianMonths = [
          "იან", "თებ", "მარ", "აპრ", "მაი", "ივნ",
          "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"
        ];

        const day = date.getDate();
        const month = georgianMonths[date.getMonth()];
        const year = date.getFullYear();

        const formattedDate = `${day} ${month}, ${year}`;
        console.log(formattedDate);


        element.status.name == "დასაწყები" ? assignmentHeaderYel.insertAdjacentHTML("afterend", `
            <div class="col-12 task-card border-yel d-flex flex-column align-items-start">
                  <div class="priority-design-date w-100 d-flex justify-content-between align-items-center">
                    <div class="priority-design d-flex">
                      <div class="${element.priority.name == 'მაღალი' ? "priority_high" : element.priority.name == 'საშუალო' ? "priority_med" : element.priority.name == 'დაბალი' ? "priority_low" : console.log("error")
                      } d-flex justify-content-center align-items-center">
                        <img src="${element.priority.icon}" alt="">
                        <h5 class="ms-1">${element.priority.name}</h5>
                      </div>
                      <div class="design d-flex justify-content-center align-items-center">
                        <h5 class="text-white main-font">დიზაინი</h5>
                      </div>
                    </div>
                    <p class="date_text main-font">${formattedDate}</p>
                  </div>
                  <div class="col-12 redberry-header">
                    <h1>${element.name}</h1>
                  </div>
                  <div class="col-12 redberry-text">
                    <p>${element.description}</p>
                  </div>
                  <div class="photo-comment-box w-100 d-flex align-items-center justify-content-between">
                    <img class="photo_element" src="${element.employee.avatar}" alt="">
                    <div class="comment-elements d-flex justify-content-center align-items-center">
                      <img src="./assets/icons/Comments.png" alt="">
                      <p class="comment_count ms-1">${element.total_comments}</p>
                    </div>
                  </div>
            </div>`) : element.status.name == "პროგრესში" ? assignmentHeaderOra.insertAdjacentHTML("afterend", `
                <div class="col-12 task-card border-ora d-flex flex-column align-items-start">
                      <div class="priority-design-date w-100 d-flex justify-content-between align-items-center">
                        <div class="priority-design d-flex">
                          <div class="${element.priority.name == 'მაღალი' ? "priority_high" : element.priority.name == 'საშუალო' ? "priority_med" : element.priority.name == 'დაბალი' ? "priority_low" : console.log("error")
                          } d-flex justify-content-center align-items-center">
                            <img src="${element.priority.icon}" alt="">
                            <h5 class="ms-1">${element.priority.name}</h5>
                          </div>
                          <div class="design d-flex justify-content-center align-items-center">
                            <h5 class="text-white main-font">დიზაინი</h5>
                          </div>
                        </div>
                        <p class="date_text main-font">${formattedDate}</p>
                      </div>
                      <div class="col-12 redberry-header">
                        <h1>${element.name}</h1>
                      </div>
                      <div class="col-12 redberry-text">
                        <p>${element.description}</p>
                      </div>
                      <div class="photo-comment-box w-100 d-flex align-items-center justify-content-between">
                        <img class="photo_element" src="${element.employee.avatar}" alt="">
                        <div class="comment-elements d-flex justify-content-center align-items-center">
                          <img src="./assets/icons/Comments.png" alt="">
                          <p class="comment_count ms-1">${element.total_comments}</p>
                        </div>
                      </div>
                </div>`)
                : element.status.name == "მზად ტესტირებისთვის" ? assignmentHeaderPink.insertAdjacentHTML("afterend", `
                    <div class="col-12 task-card border-pink d-flex flex-column align-items-start">
                          <div class="priority-design-date w-100 d-flex justify-content-between align-items-center">
                            <div class="priority-design d-flex">
                              <div class="${element.priority.name == 'მაღალი' ? "priority_high" : element.priority.name == 'საშუალო' ? "priority_med" : element.priority.name == 'დაბალი' ? "priority_low" : console.log("error")
                              } d-flex justify-content-center align-items-center">
                                <img src="${element.priority.icon}" alt="">
                                <h5 class="ms-1">${element.priority.name}</h5>
                              </div>
                              <div class="design d-flex justify-content-center align-items-center">
                                <h5 class="text-white main-font">დიზაინი</h5>
                              </div>
                            </div>
                            <p class="date_text main-font">${formattedDate}</p>
                          </div>
                          <div class="col-12 redberry-header">
                            <h1>${element.name}</h1>
                          </div>
                          <div class="col-12 redberry-text">
                            <p>${element.description}</p>
                          </div>
                          <div class="photo-comment-box w-100 d-flex align-items-center justify-content-between">
                            <img class="photo_element" src="${element.employee.avatar}" alt="">
                            <div class="comment-elements d-flex justify-content-center align-items-center">
                              <img src="./assets/icons/Comments.png" alt="">
                              <p class="comment_count ms-1">${element.total_comments}</p>
                            </div>
                          </div>
                    </div>`) : element.status.name == "დასრულებული" ? assignmentHeaderBlue.insertAdjacentHTML("afterend", `
                        <div class="col-12 task-card border-blue d-flex flex-column align-items-start">
                              <div class="priority-design-date w-100 d-flex justify-content-between align-items-center">
                                <div class="priority-design d-flex">
                                  <div class="${element.priority.name == 'მაღალი' ? "priority_high" : element.priority.name == 'საშუალო' ? "priority_med" : element.priority.name == 'დაბალი' ? "priority_low" : console.log("error")
                                  } d-flex justify-content-center align-items-center">
                                    <img src="${element.priority.icon}" alt="">
                                    <h5 class="ms-1">${element.priority.name}</h5>
                                  </div>
                                  <div class="design d-flex justify-content-center align-items-center">
                                    <h5 class="text-white main-font">დიზაინი</h5>
                                  </div>
                                </div>
                                <p class="date_text main-font">${formattedDate}</p>
                              </div>
                              <div class="col-12 redberry-header">
                                <h1>${element.name}</h1>
                              </div>
                              <div class="col-12 redberry-text">
                                <p>${element.description}</p>
                              </div>
                              <div class="photo-comment-box w-100 d-flex align-items-center justify-content-between">
                                <img class="photo_element" src="${element.employee.avatar}" alt="">
                                <div class="comment-elements d-flex justify-content-center align-items-center">
                                  <img src="./assets/icons/Comments.png" alt="">
                                  <p class="comment_count ms-1">${element.total_comments}</p>
                                </div>
                              </div>
                        </div>`) : console.log("error") })
    }
    getTaskFunc()
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

    if(filterNameDep.classList.contains('filter_active')){
        filterNameDep.classList.remove('filter_active')
    }    
    else{
        filterNameDep.classList.add('filter_active')
    }
    filterNamePri.classList.remove('filter_active')
    filterNameEmp.classList.remove('filter_active')
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
    if(filterNamePri.classList.contains('filter_active')){
        filterNamePri.classList.remove('filter_active')
    }    
    else{
        filterNamePri.classList.add('filter_active')
    }
    filterNameDep.classList.remove('filter_active')
    filterNameEmp.classList.remove('filter_active')
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

    if(filterNameEmp.classList.contains('filter_active')){
        filterNameEmp.classList.remove('filter_active')
    }    
    else{
        filterNameEmp.classList.add('filter_active')
    }
    filterNamePri.classList.remove('filter_active')
    filterNameDep.classList.remove('filter_active')
})
buttonDep.addEventListener('click', () => {
    let checkedArrDep = []
    let checkedIndexDep = 0
    filterApiAddingh1.querySelectorAll('label').forEach((element) => {
        let checkbox = element.querySelector('input')
        checkedArrDep.push({[getDepartmentArray[checkedIndexDep].name] : checkbox.checked})  
        checkedIndexDep++
    })
    console.log(checkedArrDep);
})
buttonPri.addEventListener('click', () => {
    let checkedArrPri = []
    let checkedIndexPri = 0
    filterApiAddingh2.querySelectorAll('label').forEach((element) => {
        let checkbox = element.querySelector('input')
        checkedArrPri.push({[getPriorityArray[checkedIndexPri].name] : checkbox.checked})  
        checkedIndexPri++
    })
    console.log(checkedArrPri);
})
buttonEmp.addEventListener('click', () => {
    let checkedArrEmp = []
    let checkedIndexEmp = 0
    filterApiAddingh3.querySelectorAll('label').forEach((element) => {
        let checkbox = element.querySelector('input')
        checkedArrEmp.push({[getEmployeesArray[checkedIndexEmp].id] : checkbox.checked})  
        checkedIndexEmp++
    })
    console.log(checkedArrEmp);
})
getAsyncElement()
