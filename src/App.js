import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Home,Table } from "./pages";
import { LayoutProvider } from "./components/layout/LayoutProvider";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutProvider>
              <Home />
            </LayoutProvider>
          }
        />
         <Route
          path="/table"
          element={
            <LayoutProvider>
              <Table />
            </LayoutProvider>
          }
        /> 
        <Route
          path="/category"
          element={
            <LayoutProvider>
              <Category />
            </LayoutProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
