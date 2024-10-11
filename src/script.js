import "./style.css";
import { visualiseContentUI, visualiseSidebarUI } from "./UI.js";

//array that contains all projects
const projects = [];

const createProject = (name) => {
  //add new project object to project array
  if (checkProjectAvailability(projects, name)) {
    projects.push({ name, tasks: [] });
  }
};

const modifyProject = (projectID, newName) => {
  //get targeted project, modify name
  if (checkProjectAvailability(projects, newName)) {
    projects.filter((project) => project.name === projectID)[0].name = newName;
  }
};

const deleteProject = (projectID) => {
  //get targeted project, remove it from the projects list
  if (projects.length > 1) {
    projects.splice(
      projects.map((project) => project.name).indexOf(projectID),
      1
    );
  }
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
  const projectIndex = projects
    .map((project) => project.name)
    .indexOf(projectID);
  const taskIndex = projects[projectIndex].tasks
    .map((task) => task.title)
    .indexOf(taskID);
  console.log(projectIndex + " " + taskIndex);
  projects[projectIndex].tasks[taskIndex] = {
    title,
    description,
    deadline,
    urgency,
  };
};

const deleteTask = (projectID, taskID) => {
  //get targeted project, get targeted task, delete said task
  const targetedProject = projects.filter(
    (project) => project.name === projectID
  );
  const targetedTaskIndex = targetedProject[0].tasks
    .map((task) => task.title)
    .indexOf(taskID);
  targetedProject[0].tasks.splice(targetedTaskIndex, 1);
};

const checkProjectAvailability = (array, name) => {
  return array.map((element) => element.name).indexOf(name) === -1
    ? true
    : false;
};

const checkTaskAvailability = (array, title) => {
  return array.map((element) => element.title).indexOf(title) === -1
    ? true
    : false;
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

//Cancel dialog2
const cancelDialog2 = document.querySelector("#cancelDialog2");
cancelDialog2.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#createTaskForm").parentNode.close();
});

//Confirm dialog2
const confirmDialog2 = document.querySelector("#confirmDialog2");
confirmDialog2.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedProject = document.querySelector("#projectSelection2").value;
  const taskTitle = document.querySelector("#taskTitle2").value;
  const taskDescription = document.querySelector("#taskDescription2").value;
  const taskDeadline = document.querySelector("#taskDeadline2").value;
  const taskUrgency = document.querySelector("#taskUrgency2").value;

  if (
    checkTaskAvailability(
      projects.filter((project) => {
        return project.name === selectedProject;
      })[0].tasks,
      taskTitle
    )
  ) {
    createTask(
      selectedProject,
      taskTitle,
      taskDescription,
      taskDeadline,
      taskUrgency
    );
    visualiseSidebarUI(projects);
    visualiseContentUI(
      projects.filter((project) => {
        return project.name === selectedProject;
      })[0]
    );
    document.querySelector("#taskTitle2").value = "";
    document.querySelector("#taskDescription2").value = "";
    document.querySelector("#taskDeadline2").value = "";
  }
  document.querySelector("#createTaskForm").parentNode.close();
});

//Cancel dialog3
const cancelDialog3 = document.querySelector("#cancelDialog3");
cancelDialog3.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#modifyTaskForm").parentElement.close();
});

//Confirm dialog3
const confirmDialog3 = document.querySelector("#confirmDialog3");
confirmDialog3.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    checkTaskAvailability(
      projects.filter(
        (project) =>
          project.name ===
          document.querySelector("#modifyTaskProjectInfo").textContent
      )[0].tasks,
      document.querySelector("#taskTitle3").value
    ) ||
    document.querySelector("#taskTitle3").getAttribute("value") ===
      document.querySelector("#taskTitle3").value
  ) {
    modifyTask(
      document.querySelector("#modifyTaskProjectInfo").textContent,
      document.querySelector("#taskTitle3").getAttribute("value"),
      document.querySelector("#taskTitle3").value,
      document.querySelector("#taskDescription3").value,
      document.querySelector("#taskDeadline3").value,
      document.querySelector("#taskUrgency3").value
    );
    console.log(document.querySelector("#taskDeadline3").value);
    visualiseSidebarUI(projects);
    visualiseContentUI(
      projects.filter(
        (project) =>
          project.name ===
          document.querySelector("#modifyTaskProjectInfo").textContent
      )[0]
    );
  }

  document.querySelector("#modifyTaskForm").parentElement.close();
});

//Cancel dialog4
const cancelDialog4 = document.querySelector("#cancelDialog4");
cancelDialog4.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#deleteTaskForm").parentElement.close();
});

//Confirm dialog4
const confirmDialog4 = document.querySelector("#confirmDialog4");
confirmDialog4.addEventListener("click", (event) => {
  event.preventDefault();
  deleteTask(
    document.querySelector("#deleteTaskProjectInfo").textContent,
    document.querySelector("#deleteTaskTaskInfo").textContent
  );
  visualiseSidebarUI(projects);
  visualiseContentUI(
    projects.filter((project) => {
      return (
        project.name ===
        document.querySelector("#deleteTaskProjectInfo").textContent
      );
    })[0]
  );
  document.querySelector("#deleteTaskForm").parentElement.close();
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
/*
import { format } from "date-fns";
console.log(format(new Date(), "yyyy-MM-dd"));
*/
