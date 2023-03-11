import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";

import {
    Route,
    Routes,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
