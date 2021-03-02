// import React, { useContext } from "react";
// import { ProductsContext } from "../../contexts/ProductsContext";
// import Loading from "../Loading";
// import ProductItem from "../ProductItem";

// function ProductsList({ products }) {
//   const { errorProducts, isLoadingProducts } = useContext(ProductsContext);
//   return (
//     <>
//       {(errorProducts.message && errorProducts.message) || (
//         <Loading isLoading={isLoadingProducts}>
//           {products.map((product) => (
//             <ProductItem key={product.id} product={product} />
//           ))}
//         </Loading>
//       )}
//     </>
//   );
// }

// export default ProductsList;
