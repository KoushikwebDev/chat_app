import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

// Routes
import Router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", Router);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);
cloudinary.config({
  // cloud_name: config.CLOUD_NAME,
  // api_key: config.API_KEY,
  // api_secret: config.API_SECRET,
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to chat app backend",
    success: true,
    data: null,
  });
});

export default app;
