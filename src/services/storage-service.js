
class StorageService {

    #typeKey = "type";
    #userKey = "user";
    #tokenKey = "token";
    #searchKey = "search_string";

    readType = () => localStorage.getItem(this.#typeKey);
    readUser = () => JSON.parse(localStorage.getItem(this.#userKey));
    readToken = () => localStorage.getItem(this.#tokenKey);

    storeType = typeString =>  localStorage.setItem(this.#typeKey, typeString);
    storeUser = userObject =>  localStorage.setItem(this.#userKey, JSON.stringify(userObject));
    storeToken = tokenString => localStorage.setItem(this.#tokenKey, tokenString);

    storeSearchString = searchString => localStorage.setItem(this.#searchKey, searchString);
    readSearchString = () => localStorage.getItem(this.#searchKey);

    forgetStorage() {
        localStorage.removeItem(this.#tokenKey);
        localStorage.removeItem(this.#userKey);
        localStorage.removeItem(this.#tokenKey);
        localStorage.removeItem(this.#searchKey);
        return true;
    }
}

export default new StorageService();