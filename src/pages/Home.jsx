import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { MenuCard, MenuTabPanel } from "../components/menus";

export const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "gray" }}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{ sx: { background: "#EF4444" } }}
            sx={{
              "& button.Mui-selected": {
                color: "#EF4444",
                fontWeight: "bold",
              },
              "& button": { color: "white" },
            }}
          >
            <Tab label="Category0" value={0} />
            <Tab label="Category1" value={1} />
            <Tab label="Category2" value={2} />
          </TabList>
        </Box>
        <Box>
          {[0, 1, 2].map((i) => (
            <MenuTabPanel value={i} />
          ))}
        </Box>
      </TabContext>
    </div>
  );
};
