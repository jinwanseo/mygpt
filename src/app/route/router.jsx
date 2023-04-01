import Root from "Root";
import Main from "views/dashboard/Main";
import SpeechComponent from "views/speech/Speech";

const { createBrowserRouter } = require("react-router-dom");

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "speech",
        element: <SpeechComponent />,
      },
    ],
  },
]);
