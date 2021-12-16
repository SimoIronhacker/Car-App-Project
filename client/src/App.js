import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Brands from "./views/Brands";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import BrandDetails from "./views/BrandDetails";
import FormCreate from "./Form/FormCreate";
import FormUpdate from "./Form/FormUpdate";
import NotFound from "./views/NotFound";

import NavMain from "./NavBar/NavMain";

export default function App() {
  return (
    <div className="app">
      <NavMain />


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/brand" component={Brands} />
        <Route
          path="/brand/:category(chiron|oneoff|conceptcar|veyron)"
          component={Brands}
        />
        <Route path="/brand/details/:id" component={BrandDetails} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/create-brand" component={FormCreate} />
        <Route path="/dashboard/update-brand/:id" component={FormUpdate} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}
