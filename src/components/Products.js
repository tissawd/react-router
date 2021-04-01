
import Product from './Product';
const faker = require('faker');


const Products = () => {
  
  let products = [];
  for (let i = 0; i < 16; i++){
    products.push({productName: faker.commerce.productName(), productPhoto: faker.random.image()})
  }
  console.log(products);
  return(
    <div className="products">
      {products.map(product => {
        return <Product productName={product.productName} photo={product.productPhoto} />
      })}
    </div>
  )

}

export default Products;