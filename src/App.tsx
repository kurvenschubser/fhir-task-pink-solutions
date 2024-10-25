import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const App = () => {
  return (
    <div className="App">
      <Link to={"/"}>
        <header>
          <h1 className="text-3xl font-bold underline">
            FHIR Task Pink Solutions
          </h1>
        </header>
      </Link>

      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-2xl">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <NavLink
                    to="/patients"
                    className={({ isActive }) => (isActive ? "font-bold" : "")}
                  >
                    Patientenliste
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="mt-8" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
