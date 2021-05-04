import { FC, useState } from 'react';

const MainField: FC = () => {
  type TaskType = {
    name: string;
  };
  const initialTask: TaskType[] = [
    {
      name: '開発',
    },
    {
      name: '勉強',
    },
    {
      name: '移動',
    },
  ];
  /* eslint-disable */
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<TaskType[]>(initialTask);
  /* eslint-able */
  return (
    <main>
      {task === '' ? (
        <h1>タスクは選択されていません。</h1>
      ) : (
        <h1>現在のタスクは{task}です。</h1>
      )}
      <select
        name="task"
        id=""
        onChange={(e) => {
          setTask(e.target.value);
        }}
      >
        <option value="">選択してください。</option>
        {tasks &&
          tasks.map((item) => {
            return <option value={item.name}>{item.name}</option>;
          })}
      </select>
    </main>
  );
};

export default MainField;
