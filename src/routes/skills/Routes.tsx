import type { JSX } from "react";
import { Routes, Route } from "react-router";
import Layout from "../../examples/skills/Layout";
import Home from "../../examples/skills/home/Home";
import AddSkils from "../../examples/skills/add-skills/AddSkills";
import ViewSkils from "../../examples/skills/view-skills/ViewSkills";

function SkillRoutes(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Layout title="Home">
            <Home />
          </Layout>
        }
      />
      <Route
        path="/skills"
        element={
          <Layout title="Skills">
            <ViewSkils />
          </Layout>
        }
      />
      <Route
        path="/add-skill"
        element={
          <Layout title="Add Skill">
            <AddSkils />
          </Layout>
        }
      />
    </Routes>
  );
}

export default SkillRoutes;
