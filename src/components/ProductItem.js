const ProductItem = ({ item: { id, name, image, price, brand, size, idealFor }, item }) => {
  size = size.join(" | ");
  idealFor = idealFor.join(" | ");

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="card-body">
          <h4 className="mb-md ">{name}</h4>
          <h5 className="">Rs. {price}</h5>
          <span className="">{brand}</span>
          <span className="">Size: {size}</span>
          <span className="">{idealFor}</span>
        </div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
