import axios from "axios";

const instance = axios.create({
          baseURL: "https://api.themoviedb.org/3",
});

instance.get("/movie/top_rated")
          .then(response => {
                    // Handle successful response
                    console.log(response.data); // Or do something with the data
          })
          .catch(error => {
                    // Handle error
                    console.error("Error fetching data:", error);
          });

export default instance;
