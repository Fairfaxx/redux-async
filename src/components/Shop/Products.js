import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 75,
    description: "The first Book I ever wrote",
    title: "My First Book",
  },
  {
    id: "p2",
    price: 129,
    description: "One of the best novels ever",
    title: "Catcher in the Rye",
  },
  {
    id: "p3",
    price: 175,
    description: "The comic novel you might have read",
    title: "A Confederacy of Dunces",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY_PRODUCTS.map((product) => (
        <ul>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </ul>
      ))}
    </section>
  );
};

export default Products;
