//CRUD = Create Read Update Delete

const decriptionTag = document.querySelector("#decription")
const priorityTag = document.querySelector("#priority")
const createBtn = document.querySelector(".creator_btn")
const taskContainerTag = document.querySelector(".tasks .container")

const createTaskHtml = (taskName, arr) =>{
  return `
  <div class="task">
        <p class="task_name">${taskName}</p>
        <label>
          <select class="task_priority">
            <option value="${arr[0]}">${arr[0]}</option>
            <option value="${arr[1]}">${arr[1]}</option>
            <option value="${arr[2]}">${arr[2]}</option>
          </select>
        </label>
        <button class="delete_btn">Delete</button>
      </div>
  `
}

createBtn.addEventListener("click", () => {
  const text = decriptionTag.value
  const select = priorityTag.value
  if(text) {
    const arr = ['High', 'Medium', 'Low']
    const sortedArray = arr.reduce((acc, rec) => rec !== select ? [...acc, rec] : [rec, ...acc], [])
    taskContainerTag.innerHTML = taskContainerTag.innerHTML + createTaskHtml(text, sortedArray)
    const delete_btns = document.querySelectorAll(".delete_btn")
    delete_btns.forEach((el) => {
      el.addEventListener("click", () => {
        taskContainerTag.removeChild(el.parentNode)
      })
    })
  }else{
    
  }
})