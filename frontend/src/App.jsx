import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow ">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </main>
    </div>
  );
}
export default App;
