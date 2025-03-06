import express from "express";
const app = express();
import logger from "./colors/colors&log.js";
import handler from "./errorhandler.js";
import posts from "./posts.js";
import notFound from "./notfound.js";
//middlewareset up

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//coloring according to method

app.use(logger);
// for undefined requests

app.use(notFound);

app.use("/data/posts", posts);
//error handling to rep  lace html

app.use(handler);

app.listen(8008, () => console.log("server is running on port 8008 "));
