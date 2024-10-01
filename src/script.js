import "./style.css";
import {
  createProjectUI,
  createTaskUI,
  updateTaskUI,
  deleteTaskUI,
  visualiseContentUI,
  visualiseSidebarUI,
} from "./UI.js";

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
    projects.indexOf(projects.filter((project) => project.name === projectID)),
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

//Add project button
const addProjectButton = document.querySelector(".sidebar-bottom button");
const addProjectDialog =
  document.querySelector("#createProjectForm").parentElement;

addProjectButton.addEventListener("click", () => {
  addProjectDialog.showModal();
});

//Cancel dialog1
const cancelProjectDialog = document.querySelector("#cancelDialog1");
cancelProjectDialog.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#nameInput1").value = "";
  addProjectDialog.close();
});

//Confirm dialog1
const confirmProjectDialog = document.querySelector("#confirmDialog1");
confirmProjectDialog.addEventListener("click", (event) => {
  event.preventDefault();
  createProject(document.querySelector("#nameInput1").value);
  visualiseSidebarUI(projects);
  visualiseContentUI(projects[projects.length - 1]);
  document.querySelector("#nameInput1").value = "";
  addProjectDialog.close();
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
createTask("General", "title3", "description1", "deadline1", "medium");
createTask("General", "title4", "description1", "deadline1", "high");

//deleteTask("General", "title1");
//modifyProject("General", "NotSoGeneral");
//deleteProject("General");
visualiseContentUI(projects[0]);
visualiseSidebarUI(projects);
