import Button from "../components/Button"
import Navbar from "../components/Navbar"

const Products = () => {

const sayHello=()=>{
  alert("Hello")
}
  
  return(
    <div>
      < Navbar />
      <h1>Products</h1>
      <Button text="Add to Cart" onClick={sayHello}/>
    </div>
  )
}

export default Products