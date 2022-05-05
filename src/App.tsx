import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomeLayout from "layout/HomeLayout";
import Home from "pages/Home";
import HowToPlay from "pages/HowToPlay";
import Litepaper from "pages/Litepaper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/howToPlay" element={<HowToPlay />} />
          <Route path="/litePaper" element={<Litepaper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
