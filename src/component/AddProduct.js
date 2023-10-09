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

export default AddProduct;