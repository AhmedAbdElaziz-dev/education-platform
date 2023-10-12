import "./App.css";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Saved from "./pages/saved";
import Profile from "./pages/profile";
import Search from "./pages/search";

function App() {
  // const [count, setCount] = useState(0);
  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routeDefinitions);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
