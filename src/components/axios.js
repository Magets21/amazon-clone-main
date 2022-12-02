import axios from "axios";
//baseURL found in firebase --- functions, after we deploy only the backend (functions). We do this baseURL on cloud instead of local host to make our app running all the time
const instance = axios.create({
  baseURL: "https://us-central1-clone-main-c48f5.cloudfunctions.net/api",
  // baseURL: "http://127.0.0.1:5001/clone-main-c48f5/us-central1/api",
});
//we export it as default so that later we can import it as import axios from "./axios" in payment.js
export default instance;
