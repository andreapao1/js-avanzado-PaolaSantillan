import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/product.routes";

const app = express();


/* Setting the port to 5000. */
app.set("port",5000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restfull/products",productRoutes);

export default app;