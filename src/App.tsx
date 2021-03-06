import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import "./App.css";
import "./fontawesome";

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
