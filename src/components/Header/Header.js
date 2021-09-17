import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { getSelectedLatlng, getSuggestions } from "../../redux/mapSlice";
import { AutoComplete } from "../AutoComplete";

const Header = ({ title, showSearch }) => {
  const dispatch = useDispatch();
  const suggestionLists = useSelector((state) => state.map.suggestionLists);

  const onSelectList = (value) => {
    dispatch(getSelectedLatlng({ address: value, firstCall: true }));
  };

  const getSuggestionList = (value) => {
    dispatch(getSuggestions(value));
  };

  return (
    <Box
      style={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box width={3 / 4}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      {showSearch && (
        <Box width={1 / 4}>
          <AutoComplete
            placeholder="Search Place"
            onSelectList={onSelectList}
            suggestionLists={suggestionLists}
            onInputChange={getSuggestionList}
          />
        </Box>
      )}
    </Box>
  );
};

export default Header;
