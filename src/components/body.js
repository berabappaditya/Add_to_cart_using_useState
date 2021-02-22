import Product from "../Product.json";
import "./body.css";
export default function Body(props) {
  function addToCart(itemData) {
    console.log("this is cart", itemData);
    const CartItem = props.cartItem;
    const updateCartItem = props.updateCartItem;
    updateCartItem(() => [...CartItem, itemData]); //updating state
  }
  const productData = Product.items.map((itemData) => {
    return (
      <div className="cardmain" style={{ width: "25rem" }} key={itemData.name}>
        <img className="cardimage" src={itemData.url} alt={itemData.name} />
        <div className="cardbd">
          <h5 className="bodytxt">{itemData.name}</h5>
          <p className="bodytxt">Price:{itemData.price}$</p>
          <button className="addcartbtn" onClick={() => addToCart(itemData)}>
            add to cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div id="cardholder" className="row">
        {productData}
      </div>
    </>
  );
}
