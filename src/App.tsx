import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// IMPORTADOS
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
