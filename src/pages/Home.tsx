import ProductItem from "../components/Products/ProductItem";
import { products } from "../data/products";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="page--products">
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
