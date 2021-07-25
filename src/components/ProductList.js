import { useProductContext } from "../contexts/product-context";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, sortBy, filters } = useProductContext();

  const getPriceSortedData = (products, sortBy) => {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return products;
  };

  const getFilteredData = (products, list, filterName) => {
    console.log(products);
    console.log(list);
    if (list.length === 0) return products;
    if (filterName === "brand") return products.filter((item) => list.includes(item[filterName]));
    return products.filter((item) => item[filterName].some((value) => list.includes(value)));
  };

  let sortedData = getPriceSortedData(products, sortBy);
  console.log(filters.brand);
  sortedData = getFilteredData(sortedData, filters.brand, "brand");
  sortedData = getFilteredData(sortedData, filters.size, "size");
  sortedData = getFilteredData(sortedData, filters.idealFor, "idealFor");

  return (
    <div className="main-content">
      {sortedData.length === 0 && <h1 className="text-center">No products match your filters.</h1>}
      <div className="my-grid">
        {sortedData.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
