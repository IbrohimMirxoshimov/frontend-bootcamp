import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  if (!product) {
    return <div>Yuklanmoqda...</div>;
  }
console.log(product);

  return (
    <div className="flex gap-2 mt-2">
      <img
        className="w-40 rounded-lg"
        src={product.images}
      />
      <div>
        <h2 className="text-2xl font-bolder">{product.title}</h2>
        <h2 className="text-2xl font-bold">${product.price}</h2>
        <p className="text-lg">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
