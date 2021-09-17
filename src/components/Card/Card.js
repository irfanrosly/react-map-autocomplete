import React from "react";
import { Paper } from "@material-ui/core";
const Card = ({ data, onClick }) => {
  return (
    <Paper
      style={{
        marginTop: "12px",
        height: "60px",
        borderRadius: "12px",
        alignItems: "center",
        display: "flex",
        paddingLeft: "12px",
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {data.address}
    </Paper>
  );
};

export default Card;
