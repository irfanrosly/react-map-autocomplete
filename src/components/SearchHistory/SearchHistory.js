import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { Card } from "../Card";
import { getSelectedLatlng } from "../../redux/mapSlice";

const SearchHistory = () => {
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.map.searchHistory);

  return (
    <>
      <Typography variant="h5">Your search history</Typography>
      {searchHistory?.map((data, idx) => (
        <Card
          key={idx}
          data={data}
          onClick={() =>
            dispatch(
              getSelectedLatlng({
                address: data.address,
                firstCall: false,
              })
            )
          }
        />
      ))}
    </>
  );
};

export default SearchHistory;
