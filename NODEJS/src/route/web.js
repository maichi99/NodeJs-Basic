import express, { application } from "express";
import homeComtroller from "../controllers/homeController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeComtroller.getHomePage);

    router.get("/about", homeComtroller.getAboutPage);

    router.get("/crud", homeComtroller.getCRUD);
    router.post("/post-crud", homeComtroller.postCRUD)
    router.get("/get-crud", homeComtroller.displayGetCRUD);
    router.get("/edit-crud", homeComtroller.getEditCRUD);
    router.post("/put-crud", homeComtroller.putCRUD)
    router.get("/delete-crud", homeComtroller.deleteCRUD)
    //rest api

    return app.use("/", router);


}
module.exports = initWebRoutes;