import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <dev className="app">
          <div className="content">
            <Topbar />
          </div>
        </dev>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
