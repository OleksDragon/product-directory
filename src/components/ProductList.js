import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productActions";
import ProductItem from "./ProductItem";
import { Box, Button, Typography } from "@mui/material";

const ProductList = ({ onEdit }) => {
  const products = useSelector((state) => state.products);
  const categoryFilter = useSelector((state) => state.categoryFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const filteredProducts = products.filter(
    (product) => categoryFilter === "All" || product.category === categoryFilter
  );

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {filteredProducts.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No products available in this category.
        </Typography>
      ) : (
        filteredProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
              boxShadow: 1,
              borderRadius: 1,
              marginBottom: 1,
              width: 500,
            }}
          >
            <ProductItem product={product} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Vertically center the buttons
                gap: 1,
                marginLeft: 2,
                height: "100%",
                alignItems: "stretch", // Make buttons stretch to full width
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => onEdit(product)}
                sx={{ width: "100%" }} // Buttons will stretch to full width
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(product.id)}
                sx={{ width: "100%" }} // Buttons will stretch to full width
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProductList;
