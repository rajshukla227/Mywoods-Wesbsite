import Card from "../components/molecule/card"
import CardData from "../sampleData/cardData"

const WoodsPage=()=>{
    return(
        <>
        <section className="woods-hero">
          <div className="woods-hero-content">
            <h1>Explore Our Furniture Collection</h1>
            <p>Handpicked furniture pieces for every room in your home</p>
          </div>
        </section>
        
        <section className="woods-section">
          <div className="woods-header">
            <div>
              <h2>Our Products</h2>
              <p>Discover our carefully curated collection of premium furniture</p>
            </div>
            <div className="product-count">
              {CardData.length} items available
            </div>
          </div>
          <div className="cardsClass">
            {CardData.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
        </>
    )
}
export default WoodsPage