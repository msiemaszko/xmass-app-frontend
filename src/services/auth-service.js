import ApiService from './api-service';
import StorageService from './storage-service';

class AuthService {

            register(full_name, email, password) {
        return ApiService
            .post('/signup', {
                'full_name': full_name,
                'email': email,
                'password': password
            })
            .then(response => {
                return this.storeLoginDataFromResponse(response);
            });
    }

    member_login(email, password) {
        return ApiService
            .post("/api/member/login", { email, password })
            .then((apiResponse) => {
                this.storeLoginDataFromResponse(apiResponse);
                return apiResponse;
            })
    }

    user_login(email, password) {
        return ApiService
            .post("/api/user/login", { email, password })
            .then((apiResponse) => {
                this.storeLoginDataFromResponse(apiResponse);
                return apiResponse;
            })
    }

    logout = (redirect = false) => {
        StorageService.forgetStorage();
        if (redirect)
            window.location = '/';
        // TODO: redirect to /home
    }
    isLogged = () => (StorageService.readUser() && StorageService.readToken());
    getUser = () => StorageService.readUser();
    getType = () => StorageService.readType();

    /***
     * helpers to store userObject and token in localStorage
     * @param response login/register response
     * @returns {boolean|{data}} responseData if successfully otherwise false
     */
    storeLoginDataFromResponse(response) {
        if (response.status === 200 && response.data) {
            StorageService.storeType(response.data.type);
            StorageService.storeUser(response.data.user);
            StorageService.storeToken(response.data.access_token);
        }
        return response;
    }

    /**
     * prepares a header with JWT authorization
     * @returns {{authorization: string}|{}} authorization with Bearer authorization and token
     */
    genAuthHeader() {
        const userObject = StorageService.readUser();
        const token = StorageService.readToken();

        if (userObject && token) {
            return { authorization: 'Bearer ' + token };
        } else {
            return {};
        }
    }
}

export default new AuthService();