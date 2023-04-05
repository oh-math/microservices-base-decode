import express, { Application } from "express";
import cors from "cors";
import routes from "./infra/http/routes";

const app: Application = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.listen(PORT, () => {
  console.log("[Purchases] Server running");
});

export { app };
