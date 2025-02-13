import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    console.log(`Opening popup for: ${recipe.title}`); // ✅ Debugging log
    setIsDialogOpen(true);
  };

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: "10px", boxShadow: 3 }}>
        {/* Recipe Image */}
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.title}
          sx={{ borderRadius: "10px 10px 0 0" }}
        />

        <CardContent>
          {/* Title (Click to Open Popup) */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={openDialog} // ✅ Clicking title now opens the popup
          >
            {recipe.title}
          </Typography>
        </CardContent>
      </Card>

      {/* Recipe Popup Dialog */}
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>{recipe.title}</DialogTitle>
        <DialogContent>
          <Typography>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </Typography>
          <Typography>
            <strong>Instructions:</strong> {recipe.instructions}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecipeCard;
