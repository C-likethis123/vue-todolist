import IToDo from './components/ToDoListDisplay.vue';

export const searchService = {
    searchKeywords: '',
};

export function setSearchKeywords(keywords: string) {
    searchService.searchKeywords = keywords;
}

export function getSearchKeywords(): string {
    return searchService.searchKeywords;
}

export function getSearchResults(todolist: IToDo[]): string[] {
    const matchingRegex = new RegExp(getSearchKeywords(), 'i');
    return todolist.filter((todo) => todo.task.match(matchingRegex));
}