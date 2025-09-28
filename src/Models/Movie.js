import { v4 as uuid } from "uuid"

const movies = [
    {
        "_id": 1,
        "title": "Echoes of Tomorrow",
        "category": "Feature Film",
        "genre": "Science Fiction",
        "director": "Lena Rodriguez",
        "year": 2022,
        "imageURL": "https://source.boomplaymusic.com/group10/M00/09/19/3228dea59212444b94850af042a73c0cH3000W3000_464_464.jpg",
        "rating": 8.4,
        "description": "In a near-future world where memories can be traded, a young scientist discovers a black-market scheme that threatens to erase the past of humanity."
    },
    {
        "_id": 2,
        "title": "The Last Sonata",
        "category": "Feature Film",
        "genre": "Drama",
        "director": "Marco Bennett",
        "year": 2020,
        "imageURL": "https://m.media-amazon.com/images/M/MV5BNmNlNzFlMzAtNzRkZS00YWQzLThmZWItMTkxNjFkMDJlYTc3XkEyXkFqcGc@._V1_QL75_UY281_CR11,0,190,281_.jpg",
        "rating": 7.9,
        "description": "An aging pianist confronts his lost dreams when he mentors a rebellious teenager, forming an unexpected bond through music."
    },
    {
        "_id": 3,
        "title": "Shadows in Kyoto",
        "category": "Feature Film",
        "genre": "Mystery/Thriller",
        "director": "Aiko Tanaka",
        "year": 2023,
        "imageURL": "https://m.media-amazon.com/images/I/81ntlepycQL._UF1000,1000_QL80_.jpg",
        "rating": 8.7,
        "description": "When a series of cryptic murders strikes the ancient city of Kyoto, a detective must uncover a centuries-old conspiracy hidden in the temples."
    }
]
export default class Movie {
    constructor(data) {
        Object.assign(this, data);

        this._id = uuid();
    }

    static find() {
        return movies.slice();
    }
    get id() {
        return this._id
    }
    save() {
        movies.push(this)


        return this;
    }
}