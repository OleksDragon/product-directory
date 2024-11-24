import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/categoryActions";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <Box sx={{ width: 200, marginBottom: 2 }}>
      <FormControl fullWidth sx={{ height: 40 }}>
        <InputLabel sx={{ transform: "translate(0, -22px)" }}>
          Category
        </InputLabel>
        <Select onChange={handleChange} defaultValue="All" sx={{ height: 40 }}>
          <MenuItem value="All" sx={{ fontSize: "0.875rem", height: 40 }}>
            All
          </MenuItem>
          <MenuItem
            value="Electronics"
            sx={{ fontSize: "0.875rem", height: 40 }}
          >
            Electronics
          </MenuItem>
          <MenuItem value="Clothing" sx={{ fontSize: "0.875rem", height: 40 }}>
            Clothing
          </MenuItem>
          <MenuItem value="Groceries" sx={{ fontSize: "0.875rem", height: 40 }}>
            Groceries
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
