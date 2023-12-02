import express from "express";
import config from "./config";
import productsRoutes from "./routes/products.routes";

const app = express();

app.set("PORT", config.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);

export default app;
