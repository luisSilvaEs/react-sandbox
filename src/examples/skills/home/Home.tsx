import type { JSX } from "react";
import { NavLink } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <NavLink to="/skills">View</NavLink>
      <br />
      <NavLink to="/add-skill">Add Skill</NavLink>
    </div>
  );
};

export default Home;
