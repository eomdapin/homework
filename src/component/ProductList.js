import Product from './Product.js';

const ProductList = ({ product }) => {
  let key = Date.now();
  return(
    <div id="ProductList">
      {product.map(item => {
        return <Product src={item} key={key++}/>;
      })}
    </div>
  );
};

export default ProductList;