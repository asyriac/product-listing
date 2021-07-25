import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/product-context";

const Sidebar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { products, sortBy, filters, sortByPrice_LowToHigh, sortByPrice_HighToLow, clear_Filters, update_Filters } = useProductContext();

  const getList = (arr, filterName) => {
    return arr
      .map((item) => item[filterName])
      .reduce((a, b) => a.concat(b), [])
      .filter((item, idx, arr) => arr.indexOf(item) === idx);
  };

  const brandList = getList(products, "brand");
  const sizeList = getList(products, "size");
  const idealForList = getList(products, "idealFor");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1020) {
        setShowFilters(false);
      }
      if (window.innerWidth > 1020) {
        setShowFilters(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleShowFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  return (
    <div className="sidebar sticky-sidebar pt-1">
      <div className="sidebar-button-container">
        <button className="btn btn-secondary btn-sm mb-1 mt-sm" onClick={clear_Filters}>
          Clear filters
        </button>
        {!showFilters && (
          <button className="btn btn-secondary btn-sm mb-1 mt-sm mobile-btn" onClick={handleShowFilters}>
            Show filters
          </button>
        )}
        {showFilters && (
          <button className="btn btn-secondary btn-sm mb-1 mt-sm mobile-btn" onClick={handleShowFilters}>
            Hide filters
          </button>
        )}
      </div>
      {showFilters && (
        <div>
          <fieldset className="mb-sm">
            <legend>Sort</legend>
            <div className="flex flex-col small-text">
              <label className="pb-sm">
                <input type="radio" name="sort" onChange={sortByPrice_LowToHigh} checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"} />
                Low to high
              </label>
              <label className="pb-sm">
                <input type="radio" name="sort" onChange={sortByPrice_HighToLow} checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"} />
                High to low
              </label>
            </div>
          </fieldset>
          <fieldset className="mb-sm">
            <legend>Brands</legend>
            <div className="flex flex-col small-text">
              {brandList.map((brand) => {
                return (
                  <label className="pb-sm">
                    <input type="checkbox" onChange={() => update_Filters("brand", brand)} checked={filters.brand.includes(brand)} />
                    {brand}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <fieldset className="mb-sm">
            <legend>Size</legend>
            <div className="flex flex-col small-text">
              {sizeList.map((size) => {
                return (
                  <label className="pb-sm">
                    <input type="checkbox" onChange={() => update_Filters("size", size)} checked={filters.size.includes(size)} />
                    {size}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <fieldset className="mb-sm">
            <legend>Ideal for</legend>
            <div className="flex flex-col small-text">
              {idealForList.map((item) => {
                return (
                  <label className="pb-sm">
                    <input type="checkbox" onChange={() => update_Filters("idealFor", item)} checked={filters.idealFor.includes(item)} />
                    {item}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
