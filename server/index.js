import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import patientRoute from "./routes/patientRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const PORT = process.env.PORT;

app.use("/api/patient", patientRoute);

// const medProducts = [
//   {
//     id: 1,
//     img_src:
//       "https://th.bing.com/th/id/OIP.F1djbr1OV2VR76wUoyfCDwHaFw?rs=1&pid=ImgDetMain",
//     name: "Cefuroxime",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },
//   {
//     id: 2,
//     img_src:
//       "https://www.laboratoriochile.cl/wp-content/uploads/2015/11/Paracetamol_500MG_16C_BE_HD.jpg",
//     name: "paracetamol",
//     price: 100,
//     description: "painkiller",
//   },

//   {
//     id: 3,
//     img_src:
//       "https://medsmex.com.mx/store/images/ceftin-cefuroxime-generic-500-mg-10-tabs.jpg",
//     name: "Cefagine",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },
//   {
//     id: 4,
//     img_src: "https://th.bing.com/th/id/OIP.mZZ0FOe89k4HTO_d0mZOVwHaHa?rs=1&pid=ImgDetMain",
//     name: "Ibruprofen",
//     price: 100,
//     description: "For body pains and aches",
//   },

//   {
//     id: 5,
//     img_src: "https://th.bing.com/th/id/OIP.Dcqvsq0VGk4mY0snyOVrHAHaHa?rs=1&pid=ImgDetMain",
//     name: "Tylenol",
//     price: 100,
//     description: "For extra strength",
//   },

//   {
//     id: 6,
//     img_src: "https://th.bing.com/th/id/OIP.GLEmhzw02ms11HkjSYHg0wHaIx?rs=1&pid=ImgDetMain",
//     name: "Zinnat",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },
//   {
//     id: 7,
//     img_src: "https://th.bing.com/th/id/OIP.L0V06boVsEl5Ubyjz54pZAHaGT?rs=1&pid=ImgDetMain",
//     name: "Allegra",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },

//   {
//     id: 8,
//     img_src: "https://th.bing.com/th/id/OIP.SEdm-_raDxECGulQ2XufUQHaHD?rs=1&pid=ImgDetMain",
//     name: "Benadryl",
//     price: 100,
//     description: "Helps you fall sleep ",
//   },

//   {
//     id: 9,
//     img_src:
//       "https://th.bing.com/th/id/OIP.YwnI3T9a_KW_JGzgSTsyzwHaEa?rs=1&pid=ImgDetMain",
//     name: "Diclofenac",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },
//   {
//     id: 10,
//     img_src:
//       "https://www.zwitserseapotheek.com/163553-thickbox_default/dafalgan-500mg-tabl-20-tabl.jpg",
//     name: "Dafalgan",
//     price: 100,
//     description: "Antibiotic for respiratory infections",
//   },
// ];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error::", error.message);
  });
