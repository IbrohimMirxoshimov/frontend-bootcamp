import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components-mini-shop/ProductCard";
import { Button } from "antd";

function CatalogPage() {
  const params = useParams();

  const [productsState, setProductsState] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProductsState();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        setProductsState(res.data.data);
      });
  }, [params.slug, currentPage]);

  if (!productsState) {
    return <>Loading...</>;
  }

  return (
    <div>
      <div className="text-2xl">CatalogPage</div>
      <div className="gap-1 flex flex-wrap mb-2">
        {Array(productsState.pagination.total_page)
          .fill(1)
          .map((_, i) => {
            const page = i + 1;
            return (
              <Button
                type={currentPage === page ? "primary" : "default"}
                key={i}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </Button>
            );
          })}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {productsState.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CatalogPage;
