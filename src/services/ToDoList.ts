import Axios from 'axios';

export interface IList {
    id: number;
    title: string;
    contents: IToDo[];
}

export interface IToDo {
    id?: number;
    task: string;
    isCompleted: boolean;
    isDailies: boolean;
}


export const isModalActive = {
    value: false,
};

export const isEditable = {
    value: false,
};

export const selectedModal = {
    value: '',
};

export const formProps = {
    id: -1,
    todo: '',
    description: '',
    title: '',
};

// export const lists: IList[] = [{
//     id: 1,
//     title: 'Dailies',
//     contents: [{
//         id: 1,
//         task: 'Do something',
//         isCompleted: false,
//         isDailies: true,
//     }, {
//         id: 2,
//         task: 'Do something',
//         isCompleted: false,
//         isDailies: true,
//     }, {
//         id: 3,
//         task: 'Do something',
//         isCompleted: false,
//         isDailies: true,
//     }],
// }, {
//     id: 2,
//     title: 'One off tasks',
//     contents: [{
//         id: 1,
//         task: 'Do something once',
//         isCompleted: false,
//         isDailies: false,
//     }, {
//         id: 2,
//         task: 'Do something twice',
//         isCompleted: false,
//         isDailies: false,
//     }, {
//         id: 3,
//         task: 'Do something the third time',
//         isCompleted: false,
//         isDailies: false,
//     }],
// }];

Axios.get('http://localhost:8080/api/v1/db.json')
        .then((resp) => {
            const data = resp.data as IList[];
            lists.push(...data);
        });

export const lists: IList[] = [];

export function addItem(title: string, task: IToDo) {
    let list: IList;
    if (title === 'Dailies') {
        list = lists[0];
    } else {
        list = lists[1];
    }

    task.id = list.contents.length + 1;
    list.contents.push(task);
}

export function editItem(title: string, task: IToDo) {
    let listIndex;
    if (title === 'Dailies') {
        listIndex = 0;
    } else {
        listIndex = 1;
    }

    lists[listIndex] = {
        id: lists[listIndex].id,
        title: lists[listIndex].title,
        contents: lists[listIndex].contents.map((todo) => {
            if (todo.id === task.id) {
                return task;
            } else {
                return todo;
            }
        }),
    };
}

export function deleteItem(title: string, task: IToDo) {
    let listIndex;
    if (title === 'Dailies') {
        listIndex = 0;
    } else {
        listIndex = 1;
    }

    const itemToDelete = lists[listIndex].contents.filter((todo) => todo.id === task.id)[0];
    const indexOfItem = lists[listIndex].contents.indexOf(itemToDelete);
    lists[listIndex].contents.splice(indexOfItem, 1);

}
