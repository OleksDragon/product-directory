import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../actions/productActions";
import {
  TextField,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const ProductForm = ({ productToEdit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setCategory(productToEdit.category);
      setPrice(productToEdit.price);
      setDescription(productToEdit.description);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      dispatch(
        updateProduct({
          id: productToEdit.id,
          name,
          category,
          price,
          description,
        })
      );
    } else {
      dispatch(
        addProduct({ id: Date.now(), name, category, price, description })
      );
    }

    setName("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Groceries">Groceries</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Save Product
      </Button>
    </Box>
  );
};

export default ProductForm;
