import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components-mini-shop/ProductCard";
import { Button } from "antd";

function CatalogPage() {
  const params = useParams();
  console.log(params);
  
  const [products, setProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setProducts();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        setProducts(res.data.data.products);
      });
  }, [params.slug, currentPage]);

  if (!products) {
    return <>Loading...</>;
  }
  console.log(currentPage);

  return (
    <div>
      <div className="text-2xl">CatalogPage</div>
      <div>
        <Button
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(3);
          }}
        >
          3
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => {
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
