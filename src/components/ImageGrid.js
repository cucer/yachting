import React from "react";
import { Grid } from "@material-ui/core";

export default function ImageGrid({ images }) {
  return (
    <div>
      <Grid container>
        {images.map((image) => (
          <img
            src={image}
            height={70}
            style={{ border: "solid 1px #eee", cursor: "pointer" }}
            alt='grid'
          />
        ))}
      </Grid>
    </div>
  );
}
