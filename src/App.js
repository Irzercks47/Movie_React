import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import SearchPage from "./pages/SearchPage";
import MovieDetails from "./pages/MovieDetails";
// import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search/q/:query" element={<SearchPage />}></Route>
      </Routes>
    </>
  );
}

export default App;