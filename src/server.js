import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const logger = morgan("dev");
// 1. declare express application
const app = express();

app.set('view engine', 'pug');
// directory of view
app.set('views', process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`🐥 Server listening on http://localhost:${PORT}`);
// 2. start server -> execute callback function (handleListening)
app.listen(PORT, handleListening);