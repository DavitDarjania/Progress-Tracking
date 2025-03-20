export default {
  async getDepartments(){
      return await fetch("https://momentum.redberryinternship.ge/api/departments", {
        method: "GET",
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 9e7883a9-1113-45e6-8c94-d46503c125e3',
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        return data;
      })
  },
  async getPriority(){
    return await fetch("https://momentum.redberryinternship.ge/api/priorities", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9e7883a9-1113-45e6-8c94-d46503c125e3',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      return data;
    })
  },

  async getEmployees(){
    return await fetch("https://momentum.redberryinternship.ge/api/employees", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9e7883a9-1113-45e6-8c94-d46503c125e3',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      return data;
    })
  },
  async getAllStatuses(){
    return await fetch("https://momentum.redberryinternship.ge/api/statuses", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9e7883a9-1113-45e6-8c94-d46503c125e3',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      return data;
    })
  },
  async getAllTasks(){
    return await fetch("https://momentum.redberryinternship.ge/api/tasks", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9e7883a9-1113-45e6-8c94-d46503c125e3',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      return data;
    })
  },
}