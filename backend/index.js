import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"
import mongoose from "mongoose"
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transaction from "./models/Transaction.js"
import OverallStat from "./models/OverallStat.js"
import AffiliateStat from "./models/AffiliateStat.js"
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const port = process.env.PORT
const URI = process.env.MONGO_DB

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

mongoose.set("strictQuery", false)
mongoose
  // @ts-ignore
  .connect(process.env.MONGO_DB)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`))

    // AffiliateStat.insertMany(dataAffiliateStat)
    // OverallStat.insertMany(dataOverallStat)
    // Transaction.insertMany(dataTransaction)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // User.insertMany(dataUser)
  })
  .catch((e) => console.log(`${e} can't connect`))
