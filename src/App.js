import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Herocontainer from "./components/overlays/hero-container";
import Star from "./components/bg/Star";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Star />
          <Herocontainer />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
