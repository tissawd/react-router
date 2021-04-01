

const Product = ({productName, photo}) => {
return(
  <div className="product">
    <h3>{productName}</h3>
    <img className="photo" src={photo} alt="random photo" />
  </div>
)

}

export default Product;