import "./style.css";
import { visualiseContentUI, visualiseSidebarUI } from "./UI.js";

//array that contains all projects
const projects = [];

const createProject = (name) => {
  //add new project object to project array
  projects.push({ name, tasks: [] });
};

const modifyProject = (projectID, newName) => {
  //get targeted project, modify name
  projects.filter((project) => project.name === projectID)[0].name = newName;
};

const deleteProject = (projectID) => {
  //get targeted project, remove it from the projects list
  projects.splice(
    projects.map((project) => project.name).indexOf(projectID),
    1
  );
};

const createTask = (projectID, title, description, deadline, urgency) => {
  //get targeted project, create new task, add said task to task array
  projects
    .filter((project) => project.name === projectID)[0]
    .tasks.push({ title, description, deadline, urgency });
};

const modifyTask = (
  projectID,
  taskID,
  title,
  description,
  deadline,
  urgency
) => {
  //get targeted project, get targeted task, update task data
  const targetedTask = projects
    .filter((project) => project.name === projectID)[0]
    .tasks.filter((task) => task.title === taskID);
  targetedTask = { title, description, deadline, urgency };
};

const deleteTask = (projectID, taskID) => {
  //get targeted project, get targeted task, delete said task
  const targetedProject = projects.filter(
    (project) => project.name === projectID
  );
  const targetedTask = targetedProject[0].tasks.filter(
    (task) => task.title === taskID
  );
  const targetedTaskIndex = targetedProject[0].tasks.indexOf(targetedTask);
  targetedProject[0].tasks.splice(targetedTaskIndex, 1);
};

//INTERACTIONS
//Add project button
const addProjectButton = document.querySelector(".sidebar-bottom button");
const addProjectDialog =
  document.querySelector("#createProjectForm").parentElement;

addProjectButton.addEventListener("click", () => {
  addProjectDialog.showModal();
});

//Cancel dialog1
const cancelDialog1 = document.querySelector("#cancelDialog1");
cancelDialog1.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#nameInput1").value = "";
  addProjectDialog.close();
});

//Confirm dialog1
const confirmDialog1 = document.querySelector("#confirmDialog1");
confirmDialog1.addEventListener("click", (event) => {
  event.preventDefault();
  createProject(document.querySelector("#nameInput1").value);
  visualiseSidebarUI(projects);
  visualiseContentUI(projects[projects.length - 1]);
  document.querySelector("#nameInput1").value = "";
  addProjectDialog.close();
});

//Cancel dialog5
const cancelDialog5 = document.querySelector("#cancelDialog5");
cancelDialog5.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#modifyProjectForm").parentElement.close();
});

//Confirm dialog5
const confirmDialog5 = document.querySelector("#confirmDialog5");
confirmDialog5.addEventListener("click", (event) => {
  event.preventDefault();
  const currentProjectIndex = projects
    .map((project) => project.name)
    .indexOf(document.querySelector("#modifyProjectInfo").textContent);
  modifyProject(
    document.querySelector("#modifyProjectInfo").textContent,
    document.querySelector("#nameInput5").value
  );
  visualiseSidebarUI(projects);
  visualiseContentUI(projects[currentProjectIndex]);
  document.querySelector("#nameInput5").value = "";
  document.querySelector("#modifyProjectForm").parentElement.close();
});

//Cancel dialog6
const cancelDialog6 = document.querySelector("#cancelDialog6");
cancelDialog6.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#deleteProjectForm").parentElement.close();
});

//Confirm dialog6
const confirmDialog6 = document.querySelector("#confirmDialog6");
confirmDialog6.addEventListener("click", (event) => {
  event.preventDefault();
  deleteProject(document.querySelector("#deleteProjectInfo").textContent);
  visualiseContentUI(projects[0]);
  visualiseSidebarUI(projects);
  document.querySelector("#deleteProjectForm").parentElement.close();
});

/////////////////
///  ENDING   ///
/////////////////
//initialization if user has never visited the website
const init = () => {
  createProject("General");
};

init();

createTask("General", "title1", "description1", "deadline1", "high");
createTask("General", "title2", "description1", "deadline1", "low");

visualiseContentUI(projects[0]);
visualiseSidebarUI(projects);
