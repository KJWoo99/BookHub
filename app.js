import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./models/database.js";
import { scrapeSites } from './services/scrape.js';
import authRouter from "./routes/auth.js";
import bookRouter from "./routes/book.js";
import adminRouter from "./routes/admin.js";
import { config } from './config.js';
import { body } from "express-validator";
import corsMiddleware from "./middleware/cors.js";
import otpRouter from "./routes/otp.js";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 정의
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(corsMiddleware);
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); // POST요청 데이터를 파싱해서 req.body에 넣어줌
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 제공 설정


// 대분류---------------------------------------------------------------------------
app.use('/auth', authRouter);
app.use('/book', bookRouter);
app.use('/otp', otpRouter);
app.use('/admin', adminRouter);
// --------------------------------------------------------------------------------






// =================================================================================
// DB연결테스트
// =================================================================================
connectDB().then(() => {
    console.log("DB connected with Mongoose🦊");
    app.listen(config.host.port, () => {
        console.log(`port:${config.host.port} 서버 가동`);
    });
}).catch(e => console.error(e));

// =================================================================================
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
})