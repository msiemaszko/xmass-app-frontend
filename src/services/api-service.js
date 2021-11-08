import axios from 'axios';
import API_URL from '../const/api-const';
import AuthService from './auth-service';

class ApiService {
    axiosInstance = axios.create({
        baseURL: API_URL
    });

    get = endPoint => {
        return this.axiosInstance
            .get(endPoint)
            .catch( errorResponse => {
                this.#checkStatus(errorResponse.response, "GET");
                return errorResponse.response || false;
        });
    }

    post = (endPoint, dataObject = {}) => {
        return this.axiosInstance
            .post(endPoint, dataObject)
            .catch( errorResponse => {
                this.#checkStatus(errorResponse.response, "POST");
                return errorResponse.response || false;
            });
    }

    getWithAuthorization = async endPoint => {
        return this.axiosInstance
            .get(endPoint, {
                headers: AuthService.genAuthHeader()
            })
            .catch(errorResponse => {
                this.#checkStatus(errorResponse.response, "GET_AUTH");
                return errorResponse.response || false;
            });
    }

    postWithAuthorization = (endPoint, dataObject = {}) => {
        return this.axiosInstance
            .post(endPoint, dataObject, {
                headers: AuthService.genAuthHeader()
            })
            .catch(response => {
                this.#checkStatus(response.response, "POST_AUTH");
                return response.response || false;
            });
    }

    #checkStatus = (errResp, method = '') => {
        if (errResp)         {
            const errorCode = errResp.status;
            console.log(`${method} ${errorCode}: ${errResp.statusText} => ${errResp.data.detail}`);
            // console.log(errResp);

            // TODO: sprawdzić
            if (errorCode === 403) {
                AuthService.logout(true);
            }
        }
    }
}

export default new ApiService();