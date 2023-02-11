const products = require("./models/productSchema");
const ProductsData = require("./constant/productData");

const defaultData = async () => {
  try {
    await products.deleteMany({});
    const storeData = await products.insertMany(ProductsData);
  } catch (error) {
    console.log(error.message, "==>error");
  }
};

module.exports = defaultData;
