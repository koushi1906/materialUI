import "./App.css";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
