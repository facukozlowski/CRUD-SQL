import app from "./app";

app.listen(app.set("PORT"));

console.log("server on port", app.set);
