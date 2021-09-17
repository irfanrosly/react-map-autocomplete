import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import { Container, Box } from "@material-ui/core";
import { Map } from "./components/Map";
import { Header } from "./components/Header";
import { SearchHistory } from "./components/SearchHistory";

const Body = () => {
  const latlng = useSelector((state) => state.map.latlng);
  return (
    <Box display="flex" style={{ height: "90vh" }}>
      <Box width={3 / 4}>
        <Map mapCenter={latlng} />
      </Box>
      <Box width={1 / 4} style={{ marginLeft: "24px" }}>
        <SearchHistory />
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Container
      maxWidth={false}
      style={{
        height: "100vh",
      }}
    >
      <Header title="Google Map Autocomplete Search" showSearch />
      <Body />
    </Container>
  );
};

export default App;
