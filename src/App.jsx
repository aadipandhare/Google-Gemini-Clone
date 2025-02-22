import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import gemini from "./config/gemini";

const App = () =>  {
  return(
    <>
      <Sidebar />
      <Main/>
    </>
   
  )
}
export default App;