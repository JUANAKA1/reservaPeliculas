import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
      <main className="flex-grow ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
        <Footer/>
    </div>
  );
}
export default App;
