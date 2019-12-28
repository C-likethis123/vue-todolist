export const searchService = {
    searchKeywords: '',
};

export function setSearchKeywords(keywords: string) {
    searchService.searchKeywords = keywords;
}

export function getSearchKeywords(): string {
    return searchService.searchKeywords;
}

export function getSearchResults(todolist: string[]): string[] {
    const matchingRegex = new RegExp(getSearchKeywords(), "i");
    return todolist.filter((todo) => todo.match(matchingRegex));
}