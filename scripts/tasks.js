export default {
    
    getTaskFunc(){
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
                  <div class="priority-design-date w-100 border border-dark d-flex justify-content-between align-items-center">
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
                      <div class="priority-design-date w-100 border border-dark d-flex justify-content-between align-items-center">
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
                          <div class="priority-design-date w-100 border border-dark d-flex justify-content-between align-items-center">
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
                              <div class="priority-design-date w-100 border border-dark d-flex justify-content-between align-items-center">
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
}