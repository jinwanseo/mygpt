import Root from "Root";
import SpeechComponent from "views/Speech";

const { createBrowserRouter } = require("react-router-dom");

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "speech",
        element: <SpeechComponent />,
      },
    ],
  },
]);
