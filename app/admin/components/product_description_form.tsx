import React from "react"

import { Product } from "@/models/product_model"

import { Box, TextField } from "@mui/material"
import { MAX_DESCRIPTION_CHAR_LENGTH } from "@/app/admin/admin.const"

interface ProductDescriptionFormProps {
  currentProduct: Product
  updateCurrentProduct: (product: Partial<Product>) => void
}

export const ProductDescriptionForm: React.FC<ProductDescriptionFormProps> = ({
  currentProduct,
  updateCurrentProduct,
}) => {
  return (
    <div className="w-full">
      <div className={`flex items-center justify-between mb-1`}>
        <label
          htmlFor="product-title"
          className={`block font-semibold  text-gray-100 dark:text-gray-300`}
        >
          Description
        </label>
      </div>
      <Box className="w-full relative">
        <TextField
          id="product-description"
          value={currentProduct.description}
          onChange={(e) =>
            updateCurrentProduct({
              description: e.target.value.slice(0, MAX_DESCRIPTION_CHAR_LENGTH),
            })
          }
          multiline
          minRows={4}
          maxRows={6}
          fullWidth
          style={{ outline: "none" }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
            },
            "& .MuiInputBase-root": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: 8,
            right: 12,
            fontSize: "0.75rem",
            color: "#888",
            pointerEvents: "none",
          }}
        >
          {`${currentProduct.description?.length || 0}/${MAX_DESCRIPTION_CHAR_LENGTH}`}
        </span>
      </Box>
    </div>
  )
}
