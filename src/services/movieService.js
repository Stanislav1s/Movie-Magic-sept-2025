import Movie from "../Models/Movie.js";

export default {
    getAll() {
        return Movie.find()
    }, create(movieData) {
        console.log(movieData);

        const movie = new Movie(movieData)

        return movie.save()

    }
}
