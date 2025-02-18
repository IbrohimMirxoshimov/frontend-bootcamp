import { Button, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SortByDown02Icon from "../components-mini-shop/icons/sort-by-down-02-stroke-rounded";
import SortByUp02Icon from "../components-mini-shop/icons/sort-by-up-02-stroke-rounded";
import SideFilter from "../components-mini-shop/SideFilter";
import ProductCard from "../components-mini-shop/ProductCard";
import useMyStore from "../my-store";

function SortButton({ name, currentSort, onChangeSort, title }) {
  const [tartibi, setTartibi] = useState(false);

  return (
    <div
      className="flex gap-1 items-center border border-gray-400 rounded p-1 select-none"
      onClick={() => {
        setTartibi(!tartibi);
        onChangeSort(name);
      }}
    >
      <span>{title}</span>
      {currentSort === name ? (
        <>{tartibi ? <SortByDown02Icon /> : <SortByUp02Icon />}</>
      ) : null}
    </div>
  );
}

function SortButtons() {
  const state = useMyStore();

  function onChange(name) {
    useMyStore.setState({
      currentSort: name,
    });
  }

  return (
    <div className="flex gap-2 mb-2">
      <SortButton
        name={"price"}
        title={"Narx"}
        currentSort={state.currentSort}
        onChangeSort={onChange}
      />
      <SortButton
        name={"order_count"}
        title={"Ommabop"}
        currentSort={state.currentSort}
        onChangeSort={onChange}
      />
      <SortButton
        name={"rating"}
        title={"Reyting"}
        currentSort={state.currentSort}
        onChangeSort={onChange}
      />
    </div>
  );
}
function CatalogPage() {
  const params = useParams();

  const [productsState, setProductsState] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const state = useMyStore();

  useEffect(() => {
    setProductsState();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=${state.currentSort}&page=${currentPage}`
      )
      .then((res) => {
        setProductsState(res.data.data);
      });
  }, [params.slug, currentPage, state.currentSort]);

  return (
    <div>
      <div className="text-2xl">CatalogPage</div>
      <SortButtons />
      {productsState && <SideFilter filter={productsState.filter} />}
      {productsState && (
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
      )}
      <div className="grid grid-cols-3 gap-2">
        {productsState ? (
          productsState.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })
        ) : (
          <div className="grid grid-cols-3 w-screen gap-2">
            {Array(100)
              .fill(1)
              .map((_, i) => {
                return (
                  <Skeleton.Node
                    key={i}
                    active={true}
                    style={{
                      width: "100%",
                    }}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
