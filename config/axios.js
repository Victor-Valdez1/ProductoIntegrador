import axios from "axios";
const axiosFetch = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzAwNGIyZmIyMDAwMzQzNjJkYmMxMjZiZjU5ZWJkNiIsInN1YiI6IjY1NjkxNTg1YjdkMzUyMDBhZDU2ODAyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dL_CQVEQOE1o5PeXRZ06XqjGM7u_ZCBkmkaoOWXxxwk"
        }   
    });

export default axiosFetch;
