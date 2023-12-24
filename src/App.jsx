import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/Nav";
import Write from "./components/Routes/WriteText/Write.jsx";
import List from "./components/Routes/List.jsx";
import Favorites from "./components/Routes/Favorites.jsx";

let Notes = [];

const router = createBrowserRouter([
  {
    path: "/",
    element: <List></List>,
  },
  {
    path: "/favorites",
    element: <Favorites></Favorites>,
  },
  {
    path: "/write",
    element: <Write Notes={Notes}></Write>,
  },
]);

function App() {

  return (
    <>
      <Nav></Nav>
      <div className="app-content">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
