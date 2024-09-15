const createProjectUI = (name) => {
  //create new project node
  console.log(name);
};

const createTaskUI = (title, description, deadline, urgency, project) => {
  //get project node
  //create all UI elements of the task
  //append to the project node
  //also append it to the sidebar (different function?)
};

const updateTaskUI = (
  taskIdentifier,
  title,
  description,
  deadline,
  urgency
) => {
  //get task node
  //check which input fields contain values
  //change those fields
};

const deleteTaskUI = (taskIdentifier) => {
  //get task node
  //remove it completely
  //also remove from the sidebar (different function?)
};

export { createProjectUI, createTaskUI, updateTaskUI, deleteTaskUI };
