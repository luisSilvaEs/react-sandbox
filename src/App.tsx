import "./App.css";
import FlaggedPosts from "../src/examples/moderation/FlaggedPosts";
import VideoPlayer from "./examples/video/VideoPlayer";
import Workspace from "../src/examples/admin/Workspace";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./examples/theme/providers/theme-provider";

import SkillRoutes from "./routes/skills/Routes";

function App() {
  return (
    <>
      {/**
       * <VideoPlayer src="/videos/demo.mp4" />
       */}
      <BrowserRouter>
        <ThemeProvider>
          <SkillRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
