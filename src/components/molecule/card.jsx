
import { useCart } from '../../context/CartContext';

function Card({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />

      <div className="card-content">
        <span className="category">{item.category}</span>

        <h2>{item.title}</h2>

        <p>{item.description}</p>

        <div className="card-footer">
          <h3>{item.price}</h3>
          <button onClick={handleAddToCart} className="btn-add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;