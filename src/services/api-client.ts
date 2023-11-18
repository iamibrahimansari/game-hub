import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "32f241fd0cc643fea91c3e1b38978d56",
    },
});
