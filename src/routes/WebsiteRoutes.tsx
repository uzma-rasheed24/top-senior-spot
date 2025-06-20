import WebsiteLayout from "../layouts/WebsiteLayout";
// import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
// import FacilitiesPage from "../pages/FacilitiesPage";
// import HealthPage from "../pages/HealthPage";
// import FinancialAdvicePage from "../pages/FinancialAdvicePage";
// import TechnologyGuidesPage from "../pages/TechnologyGuidesPage";
// import TravelLeisurePage from "../pages/TravelLeisurePage";
// import LifestylePage from "../pages/LifestylePage";
// import HelpCenterPage from "../pages/HelpCenterPage";

export const WebsiteRoutes = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      // { path: "", element: <HomePage /> },
      { path: "about-us", element: <AboutPage /> },
      // { path: "facilities", element: <FacilitiesPage /> },
      // { path: "health", element: <HealthPage /> },
      // { path: "financial-advice", element: <FinancialAdvicePage /> },
      // { path: "technology-guides", element: <TechnologyGuidesPage /> },
      // { path: "travel-leisure", element: <TravelLeisurePage /> },
      // { path: "lifestyle", element: <LifestylePage /> },
      // { path: "help-center", element: <HelpCenterPage /> },
    ],
  },
];