

const Product = ({productName, photo}) => {
return(
  <div className="product">
    <h3>{productName}</h3>
    <img src={photo} alt="random photo" />
  </div>
)

}

export default Product;