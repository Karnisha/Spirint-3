import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Course from "../view/Course/Course";
import Topics from "../view/Course/Topics";

import SavedTopics from "../Component/Course/SavedTopics";
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/addtopic"  element={<Topics/>}/>
        <Route path="/savedtopics/:topicId"  element={<SavedTopics/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
