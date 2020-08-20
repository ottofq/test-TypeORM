import "reflect-metadata";
import "./database";
import app from "./app";

app.listen(5000, () => {
  console.log("🏃 Running Server");
});
