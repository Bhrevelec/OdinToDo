const content = document.querySelector(".content");
import modifyIcon from "./assets/pencil.svg";
import checkIcon from "./assets/check-circle-outline.svg";
import deleteIcon from "./assets/delete.svg";
import calendarIcon from "./assets/calendar-month.svg";
import projectIcon from "./assets/list-box-outline.svg";
import taskIcon from "./assets/pound.svg";
import calendarTodayIcon from "./assets/calendar-today.svg";
import addIcon from "./assets/plus-circle.svg";

const visualiseContentUI = (project) => {
  //add project title
  content.innerHTML = "";
  const divTitle = document.createElement("div");
  divTitle.classList.add("content-title");
  content.appendChild(divTitle);
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = project.name;
  divTitle.appendChild(headerTitle);
  const buttonModify = document.createElement("button");
  buttonModify.addEventListener("click", () => {
    document.querySelector("#modifyProjectForm").parentNode.showModal();
    document.querySelector("#modifyProjectInfo").textContent = project.name;
  });
  divTitle.appendChild(buttonModify);
  const imgModify = document.createElement("img");
  imgModify.src = modifyIcon;
  buttonModify.appendChild(imgModify);
  const buttonDelete = document.createElement("button");
  buttonDelete.addEventListener("click", () => {
    document.querySelector("#deleteProjectForm").parentNode.showModal();
    document.querySelector("#deleteProjectInfo").textContent = project.name;
  });
  divTitle.appendChild(buttonDelete);
  const imgDelete = document.createElement("img");
  imgDelete.src = deleteIcon;
  buttonDelete.appendChild(imgDelete);
  //add project tasks
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  content.appendChild(listContainer);
  for (let i = 0; i < project.tasks.length; i++) {
    let listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listContainer.appendChild(listItem);
    let listItemTopLeft = document.createElement("div");
    listItemTopLeft.classList.add("list-item-top-left");
    listItem.appendChild(listItemTopLeft);
    let taskName = document.createElement("p");
    taskName.textContent = project.tasks[i].title;
    listItemTopLeft.appendChild(taskName);
    let listItemTopRight = document.createElement("div");
    listItemTopRight.classList.add("list-item-top-right");
    listItem.appendChild(listItemTopRight);
    let listItemButtonCheck = document.createElement("button");
    listItemButtonCheck.classList.add("list-item-button");
    listItemTopRight.appendChild(listItemButtonCheck);
    let checkImgButtonCheck = document.createElement("img");
    checkImgButtonCheck.src = checkIcon;
    listItemButtonCheck.appendChild(checkImgButtonCheck);
    let listItemButtonModify = document.createElement("button");
    listItemButtonModify.classList.add("list-item-button");
    listItemTopRight.appendChild(listItemButtonModify);
    let modifyImgButtonModify = document.createElement("img");
    modifyImgButtonModify.src = modifyIcon;
    listItemButtonModify.appendChild(modifyImgButtonModify);
    let listItemButtonDelete = document.createElement("button");
    listItemButtonDelete.classList.add("list-item-button");
    listItemTopRight.appendChild(listItemButtonDelete);
    let deleteImgButtonDelete = document.createElement("img");
    deleteImgButtonDelete.src = deleteIcon;
    listItemButtonDelete.appendChild(deleteImgButtonDelete);
    let listItemMiddleLeft = document.createElement("div");
    listItemMiddleLeft.classList.add("list-item-middle-left");
    listItem.appendChild(listItemMiddleLeft);
    let taskDescriptionMiddleLeft = document.createElement("p");
    taskDescriptionMiddleLeft.textContent = project.tasks[i].description;
    listItemMiddleLeft.appendChild(taskDescriptionMiddleLeft);
    let listItemBottomLeft = document.createElement("div");
    listItemBottomLeft.classList.add("list-item-bottom-left");
    listItem.appendChild(listItemBottomLeft);
    let taskDeadlineBottomLeft = document.createElement("div");
    taskDeadlineBottomLeft.classList.add("deadline");
    listItemBottomLeft.appendChild(taskDeadlineBottomLeft);
    let imgTaskDeadline = document.createElement("img");
    imgTaskDeadline.src = calendarIcon;
    taskDeadlineBottomLeft.appendChild(imgTaskDeadline);
    let textTaskDeadline = document.createElement("p");
    textTaskDeadline.textContent = project.tasks[i].deadline;
    taskDeadlineBottomLeft.appendChild(textTaskDeadline);
    let urgencyBottomLeft = document.createElement("div");
    urgencyBottomLeft.classList.add("urgency");
    switch (project.tasks[i].urgency) {
      case "high":
        urgencyBottomLeft.classList.add("high");
        break;
      case "medium":
        urgencyBottomLeft.classList.add("medium");
        break;
      case "low":
        urgencyBottomLeft.classList.add("low");
        break;
    }
    listItemBottomLeft.appendChild(urgencyBottomLeft);
    let textUrgency = document.createElement("p");
    textUrgency.textContent = `Urgency: ${project.tasks[i].urgency}`;
    urgencyBottomLeft.appendChild(textUrgency);
  }
};

const visualiseSidebarUI = (projects) => {
  //loop through the projects array, for every project, create a project node
  //loop through the tasks array within the project, for every task create a task node
  const sidebarProjectContainer = document.querySelector(
    ".sidebar-project-container"
  );
  sidebarProjectContainer.innerHTML = "";
  const sidebarTop = document.createElement("div");
  sidebarTop.classList.add("sidebar-top");
  sidebarProjectContainer.appendChild(sidebarTop);
  const sidebarTopItem1 = document.createElement("div");
  sidebarTopItem1.classList.add("sidebar-top-item");
  sidebarTop.appendChild(sidebarTopItem1);
  const button1 = document.createElement("button");
  sidebarTopItem1.appendChild(button1);
  const span1 = document.createElement("span");
  button1.appendChild(span1);
  const img1 = document.createElement("img");
  img1.src = calendarTodayIcon;
  span1.appendChild(img1);
  const p1 = document.createElement("p");
  p1.textContent = "Today";
  span1.appendChild(p1);

  const sidebarTopItem2 = document.createElement("div");
  sidebarTopItem2.classList.add("sidebar-top-item");
  sidebarTop.appendChild(sidebarTopItem2);
  const button2 = document.createElement("button");
  sidebarTopItem2.appendChild(button2);
  const span2 = document.createElement("span");
  button2.appendChild(span2);
  const img2 = document.createElement("img");
  img2.src = calendarIcon;
  span2.appendChild(img2);
  const p2 = document.createElement("p");
  p2.textContent = "Upcoming";
  span2.appendChild(p2);

  const sidebarTopItem3 = document.createElement("div");
  sidebarTopItem3.classList.add("sidebar-top-item");
  sidebarTop.appendChild(sidebarTopItem3);
  const button3 = document.createElement("button");
  sidebarTopItem3.appendChild(button3);
  const span3 = document.createElement("span");
  button3.appendChild(span3);
  const img3 = document.createElement("img");
  img3.src = addIcon;
  span3.appendChild(img3);
  const p3 = document.createElement("p");
  p3.textContent = "Add task";
  span3.appendChild(p3);

  for (let i = 0; i < projects.length; i++) {
    const sidebarProject = document.createElement("div");
    sidebarProject.classList.add("sidebar-project");
    sidebarTop.appendChild(sidebarProject);
    const sidebarProjectFlex = document.createElement("div");
    sidebarProjectFlex.classList.add("sidebar-project-flex-vertical");
    sidebarProject.appendChild(sidebarProjectFlex);
    const sidebarProjectTitle = document.createElement("div");
    sidebarProjectTitle.classList.add("sidebar-project-title");
    sidebarProjectFlex.appendChild(sidebarProjectTitle);
    const titleButton = document.createElement("button");
    titleButton.addEventListener("click", () => {
      visualiseContentUI(projects[i]);
    });
    sidebarProjectTitle.appendChild(titleButton);
    const titleSpan = document.createElement("span");
    titleButton.appendChild(titleSpan);
    const titleImg = document.createElement("img");
    titleImg.src = projectIcon;
    titleSpan.appendChild(titleImg);
    const titleText = document.createElement("p");
    titleText.textContent = projects[i].name;
    titleSpan.appendChild(titleText);
    for (let j = 0; j < projects[i].tasks.length; j++) {
      const projectTask = document.createElement("div");
      projectTask.classList.add("sidebar-project-task");
      sidebarProjectFlex.appendChild(projectTask);
      const taskButton = document.createElement("button");
      projectTask.appendChild(taskButton);
      const taskSpan = document.createElement("span");
      taskButton.appendChild(taskSpan);
      const taskImg = document.createElement("img");
      taskImg.src = taskIcon;
      taskSpan.appendChild(taskImg);
      const taskText = document.createElement("p");
      taskText.textContent = projects[i].tasks[j].title;
      taskSpan.appendChild(taskText);
    }
  }
};

export { visualiseContentUI, visualiseSidebarUI };
