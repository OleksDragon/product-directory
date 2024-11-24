import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./actions/productActions";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Filter from "./components/Filter";
import { Container, Box, Typography, Grid } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        description: "High performance laptop",
      },
      {
        id: 2,
        name: "Shirt",
        category: "Clothing",
        price: 50,
        description: "Cotton shirt",
      },
      {
        id: 3,
        name: "Apple",
        category: "Groceries",
        price: 1,
        description: "Fresh apple",
      },
    ];
    dispatch(setProducts(products));
  }, [dispatch]);

  const handleEditProduct = (product) => {
    setProductToEdit(product);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom align="center">
          Product Directory
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ marginBottom: 3 }}>
              <Filter />
            </Box>
            <ProductList onEdit={handleEditProduct} />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: "5%",
            }}
          >
            <Box sx={{ marginBottom: 3 }}>
              <ProductForm productToEdit={productToEdit} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
