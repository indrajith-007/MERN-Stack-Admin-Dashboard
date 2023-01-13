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
import config from "config"
import User from "./models/User.js"
import { dataUser } from "./data/index.js"

const app = express()
const port = config.get("mongodb.port")
const URI = config.get("mongodb.uri")

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
  .connect(URI)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`))
    // User.insertMany(dataUser)
  })
  .catch((e) => console.log(`${e} can't connect`))
