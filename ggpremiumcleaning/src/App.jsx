import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Book from "./book";
import Quote from "./quote";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
