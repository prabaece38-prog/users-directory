import { ThemeProvider } from "./context/ThemeContext";
import { UsersPage } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <UsersPage />
    </ThemeProvider>
  );
}

export default App;
