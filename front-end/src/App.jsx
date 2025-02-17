import React from "react"; // Import the React library
import Header from "./components/Header"; // Import the Header component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists";
import Artist from "./Pages/Artist";
import Songs from "./Pages/Songs";
import Song from "./Pages/Song";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
