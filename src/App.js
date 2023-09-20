// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// locales
import ThemeLocalization from "./locales";
// components
import { ThemeSettings } from "./components/settings";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <ThemeLocalization>
          <Router />
        </ThemeLocalization>
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
