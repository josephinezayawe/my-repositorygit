import express from "express";
const app = express();
import logger from "./colors/colors&log.js";
import handler from "./errorhandler.js";
import posts from "./posts.js";
import notFound from "./notfoundgen.js";
import path from "path";
import { fileURLToPath } from "url";

//get directory name

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//middlewareset up

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//coloring according to method

app.use(logger);

//get front end

app.use(express.static(path.join(_dirname, "frontend")));

//get posts

app.use("/data/posts", posts);

// for undefined requests

app.use(notFound);
//error handling to replace html(middleware)

app.use(handler);

app.listen(8000, () => console.log("server is running on port 8000 "));
