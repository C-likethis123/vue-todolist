import {IList, IToDo} from '../services/ToDoList';

export const searchService = {
    searchKeywords: '',
};

export function getSearchResults(lists: IList[]) {
    const newList: IList[] = [];
    const matchingRegex = new RegExp(searchService.searchKeywords, 'i');
    lists.forEach((list: IList) => {
        newList.push({
            id: list.id,
            title: list.title,
            contents: list.contents.filter((content: IToDo) =>
                content.task.match(matchingRegex)),
        });
    });
    return newList;
}
