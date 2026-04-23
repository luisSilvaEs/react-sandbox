import "./App.css";
import FlaggedPosts from "../src/examples/moderation/FlaggedPosts";
import VideoPlayer from "./examples/video/VideoPlayer";
import Workspace from "../src/examples/admin/Workspace";

function App() {
  return (
    <>
      {/**
       * <VideoPlayer src="/videos/demo.mp4" />
       */}
      <Workspace />
    </>
  );
}

export default App;
