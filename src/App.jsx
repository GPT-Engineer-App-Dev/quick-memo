import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;