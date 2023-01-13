import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        })
        return {
          // @ts-ignore
          ...product._doc,
          stat,
        }
      })
    )
    res.status(200).json(productsWithStats)
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}
