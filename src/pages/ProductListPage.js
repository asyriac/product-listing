import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const ProductListPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex products">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListPage;
