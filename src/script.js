import "./style.css";
import {
  createProjectUI,
  createTaskUI,
  updateTaskUI,
  deleteTaskUI,
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
    .tasks.filter((task) => task.name === taskID);
  targetedTask = { title, description, deadline, urgency };
};

const deleteTask = (projectID, taskID) => {
  //get targeted project, get targeted task, delete said task
  const targetedProject = projects.filter(
    (project) => project.name === projectID
  );
  const targetedTask = targetedProject[0].tasks.filter(
    (task) => task.name === taskID
  );
  const targetedTaskIndex = targetedProject[0].tasks.indexOf(targetedTask);
  targetedProject[0].tasks.splice(targetedTaskIndex, 1);
};

/////////////////
///  ENDING   ///
/////////////////
//initialization if user has never visited the website
const init = () => {
  createProject("General");
};

init();

createTask("General", "title1", "description1", "deadline1", "urgency1");
//deleteTask("General", "title1");
//modifyProject("General", "NotSoGeneral");
//deleteProject("General");
console.log(projects);
