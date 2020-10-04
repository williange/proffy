import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes
