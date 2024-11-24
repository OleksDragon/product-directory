import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ProductItem = ({ product }) => {
  return (
    <Card sx={{ width: 400, marginBottom: 3, boxShadow: 3 }}>
      {" "}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${product.price}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2">{product.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
