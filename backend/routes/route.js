import express from "express";
import { chat, home } from "../controller/controller.js";
const Router = express.Router();

Router.get("/home", home);
Router.get("/home/chats", chat);

export default Router;
