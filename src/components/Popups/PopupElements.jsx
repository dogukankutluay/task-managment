import { DefaultInput } from '../Inputs/Inputs';
export const ActiveAndUnActiveInput = ({
  activeInput,
  userId,
  task,
  updateTask,
  setUpdateTask,
  setActiveInput,
  value,
}) => {
  return (
    <>
      {activeInput[value] && userId === task.user.id ? (
        <DefaultInput
          value={updateTask[value]}
          autoFocus={true}
          onChange={e => setUpdateTask({ ...updateTask, [value]: e })}
        />
      ) : value === 'description' ? (
        <Description
          updateTask={updateTask}
          setActiveInput={setActiveInput}
          activeInput={activeInput}
          userId={userId}
          task={task}
        />
      ) : value === 'title' ? (
        <Title
          updateTask={updateTask}
          setActiveInput={setActiveInput}
          activeInput={activeInput}
          userId={userId}
          task={task}
        />
      ) : null}
    </>
  );
};
const Description = ({
  updateTask,
  setActiveInput,
  activeInput,
  userId,
  task,
}) => {
  return (
    <p
      style={userId === task.user.id ? { cursor: 'pointer' } : {}}
      onClick={() => setActiveInput({ ...activeInput, description: true })}>
      {updateTask.description}
    </p>
  );
};
const Title = ({ setActiveInput, activeInput, updateTask, userId, task }) => {
  return (
    <h1
      style={userId === task.user.id ? { cursor: 'pointer' } : {}}
      onClick={() => setActiveInput({ ...activeInput, title: true })}>
      {updateTask.title}
    </h1>
  );
};
