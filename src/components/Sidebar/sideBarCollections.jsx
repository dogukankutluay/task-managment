import { MyDepartmanIcon, MyTasksIcon, AllTaskIcon } from '../../assets/icon';

const collections = [
  {
    name: 'allTasks',
    href: '/',
    icon: AllTaskIcon,
    text: {
      tr: 'Görevler',
      en: 'Tasks',
    },
  },
  {
    name: 'myTaks',
    href: '/my-tasks',
    icon: MyTasksIcon,
    text: {
      tr: 'Görevlerim',
      en: 'My Tasks',
    },
  },
  {
    name: 'myDepartmantTasks',
    href: '/my-departmant-tasks',
    icon: MyDepartmanIcon,
    text: {
      tr: 'Departmanım',
      en: 'My Department',
    },
  },
];

export default collections;
