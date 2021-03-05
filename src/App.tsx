import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
