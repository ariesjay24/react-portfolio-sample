import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Skills",
    path: "/skills",
    element: <Skills />,
  },
];

export default routes;
