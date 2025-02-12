import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CatalogPage() {
  const params = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=1`
      )
      .then((res) => {
        setProducts(res.data.data.products);
      });
  }, [params.slug]);

  if (!products) {
    return <>Loading...</>;
  }

  return (
    <div>
      <div className="text-2xl">CatalogPage</div>
      <div className="grid grid-cols-4">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img
                className="h-32"
                src={product.image}
              />
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogPage;
