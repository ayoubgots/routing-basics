import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to="/products/p1">Book</Link> </li>
        <li> <Link to="/products/p2">carpet</Link> </li>
        <li> <Link to="/products/p3">missa</Link>  </li>
      </ul>
    </section>
  );
};

export default Products;
