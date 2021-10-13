export const BaseUrl = 'http://localhost:5000';
export const ApiConfig = {
  user: {
    login: '/api/auth/login',
    getAllUsers: '/api/auth/all-users',
    getMe: '/api/auth/me',
  },
  task: {
    getAllTasks: '/api/task',
    getOneTask: '/api/task',
    createTask: '/api/task',
    deleteTask: '/api/task',
    editTask: '/api/task',
    myTasks: '/api/task/my-tasks',
    myDepartmentTasks: '/api/task/pendings',
    statusChange: '/api/task',
  },
};
