import router from "./router.js";


const main = (app) =>{
    app.use("/api/" , router)
}

export default main;