import {IToDo, IToDoList} from '@/components/IToDoListDisplay';

const todosContentsDailies: IToDo[] = [
    {
      task: "Do something",
      isCompleted: false
    },
    {
      task: "Do something else",
      isCompleted: false
    },
    {
      task: "Very long task to test if rendering will stay the same",
      isCompleted: false
    }
  ];

const todosContentsOneOff = [
    {
      task: "Do some homework",
      isCompleted: false
    },
    {
      task: "Do something",
      isCompleted: false
    },
    {
      task: "Buy something",
      isCompleted: false
    },
  ];

export const todolists: IToDoList[] = [
    { title: 'Dailies', contents: todosContentsDailies },
    { title: 'One off tasks', contents: todosContentsOneOff },
  ];

export const listChosen = {
    listChosen: '',
};

export function addTask(listChosen: string, taskToAdd: string) {
    let todolist: IToDoList;

    if (listChosen === 'Dailies') {
        todolist = todolists[0].contents;
    } else {
        todolist = todolists[1].contents;
    }

    todolist.push({
        task: taskToAdd,
        isCompleted: false,
    });
}
