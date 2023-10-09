import './App.css';
import React from 'react';

const Title = (props) => {
  return (<h1>{props.children}</h1>);
};

const AddProduct = ({ next_img, now_img, prev_img, add_product }) => {
  return (
    <div id="AddProduct">
      <form action="">
        <img src={now_img} alt="keyboard" />
        <input className="next_btn" type="button" value="<" onClick={prev_img}></input>
        <input className="add_btn" type="submit" value="상품 추가" onClick={add_product}></input>
        <input className="next_btn" type="button" value=">" onClick={next_img}></input><br />
      </form>
    </div>
  );
};

const Product = ({ src }) => {
  return (
    <div className="Product">
      <img src={src} alt="keyboard"  />
    </div>
  );
};

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

const jsonLocal = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: key => JSON.parse(localStorage.getItem(key)),
};

function App() {
  const img_list = ['./img/1.jpg', './img/2.png', './img/3.jpg', './img/4.jpg', './img/5.png', './img/6.jpg', './img/7.jpg'];
  const [now_img, setNow_img] = React.useState(img_list[0]);
  const [product, setProduct] = React.useState(() => {
    return jsonLocal.getItem('product') || [];
  });

  function add_product(event) {
    event.preventDefault();
    const next_Product = [...product, now_img];
    jsonLocal.setItem('product', next_Product);
    return setProduct(next_Product);
  }

  function next_img() {
    setNow_img((pre) => {
      let img_num = img_list.indexOf(pre);
      if(img_num === 6) {
        img_num = 5;
      }
      img_num++;
      return img_list[img_num];
    });
  }
  
  function prev_img() {
    setNow_img((pre) => {
      let img_num = img_list.indexOf(pre);
      if(img_num === 0) {
        img_num = 1;
      }
      img_num--;
      return img_list[img_num];
    });
  }

  return (
    <div className="App">
      <Title>상품을 추가하세요</Title>
      <AddProduct now_img={now_img} next_img={next_img} prev_img={prev_img} add_product={add_product} />
      <ProductList product={product} />
    </div>
  );
}

export default App;
