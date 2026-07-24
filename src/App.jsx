import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="min-h-screen flex flex-col p-8 md:p-12 text-[#111111] antialiased">
      <Nav />

      <main className="flex-grow flex flex-col items-center mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
