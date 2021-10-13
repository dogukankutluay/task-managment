import { Login, Wrapper } from '../containers';

const routes = [
  {
    name: 'allTasks',
    path: '/',
    exact: true,
    component: Wrapper,
  },
  {
    name: 'myTaks',
    path: '/my-tasks',
    exact: true,
    component: Wrapper,
  },
  {
    name: 'myDepartmantTasks',
    path: '/my-departmant-tasks',
    exact: true,
    component: Wrapper,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: Login,
  },
];

export default routes;
