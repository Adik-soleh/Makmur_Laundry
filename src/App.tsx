import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import router from "./routes/router";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
