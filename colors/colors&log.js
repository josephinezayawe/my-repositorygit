import colors from "colors";

const logger = (req, res, next) => {
  const methodColor = {
    GET: "green",
    PUT: "blue",
    POST: "yellow",
    DELETE: "red",
  };
  const color = methodColor[req.method] || "white";

  console.log(
    colors[color](
      `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`
    )
  );
  next();
};
export default logger;
