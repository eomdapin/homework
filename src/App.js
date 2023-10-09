import './App.css';

const Title = (props) => {
  return (<h1>{props.children}</h1>);
};

const AddProduct = () => {
  return (
    <div id="AddProduct">
      <form action="">
        <img src="./img/1.jpg" alt="keyboard 1" />
        <input className="price" type="text" placeholder="가격 입력"></input>
        <input className="next_btn" type="button" value="<"></input>
        <input className="add_btn" type="button" value="상품 추가"></input>
        <input className="next_btn" type="button" value=">"></input><br />
      </form>
    </div>
  );
};

const Product = () => {
  return (
    <div className="Product">
      <img src="/img/1.jpg" alt="keyboard 1" />
      <span> 가격 </span>
    </div>
  );
};

const ProductList = () => {
  return(
    <div id="ProductList">
      <Product />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Title>상품페이지</Title>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
