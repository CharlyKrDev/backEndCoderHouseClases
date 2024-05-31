import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import mongoose from "./config/database.js";
import MongoStore from "connect-mongo";
import sessionsRouter from "./routes/api/sessions.js";
import viewsRouter from "./routes/views.js";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mongoServer } from "./config/database.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsPath = join(__dirname + "/views");
const publicPath = join(__dirname, "public");

const app = express();

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.enable("view cache");
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
      mongoServer,
    }),
  })
);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/sessions", sessionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/", viewsRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
