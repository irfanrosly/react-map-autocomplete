import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const AutoComplete = ({
  placeholder,
  onSelectList,
  suggestionLists,
  onInputChange,
}) => {
  return (
    <Autocomplete
      id="autocomplete-input"
      freeSolo
      onChange={(event, value) => onSelectList(value)}
      options={suggestionLists.map((option) => option.description)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder}
          margin="normal"
          variant="outlined"
          onChange={(e) => onInputChange(e.target.value)}
        />
      )}
    />
  );
};

export default AutoComplete;
