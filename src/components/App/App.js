import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NewsCategoryPredictor from "../NewsCategoryPredictor/NewsCategoryPredictor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictor" element={<NewsCategoryPredictor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
