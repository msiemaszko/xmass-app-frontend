import ApiService from './api-service';
import AuthService from './auth-service'

class MovieService {

    getMovie = movieID => {
        return ApiService
            .getWithAuthorization(`movies/${movieID}`)
    }

    searchMovie = searchString => {
        return ApiService
            .getWithAuthorization(`/movies/search/${searchString}`)
    }

    rateMovie = (movieID, rate) => {
        const user = AuthService.getUser();
        if (!user) {
            console.log("User not authenticated!");
            return false;
        }
        const rateObject = {
            movie_id: movieID,
            user_id: user.id,
            rating: rate
        }
        return ApiService
            .postWithAuthorization("/movies/rate/", rateObject)
    }

    // getRecommendationForMovie = movie => {
    //     console.log(movie);
    //     const movie_id = movie.id;
    //     return ApiService.get(`/recommend/similar/${movie_id}`)
    // }
}

export default new MovieService();