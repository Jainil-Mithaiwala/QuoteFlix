import React from 'react';
import Home from "./FactFlix Pages/Home/Home";

export const FactFlix = () => {
  const currentRoute = window.location.pathname;

  switch (currentRoute) {
    case "/factflixhome":
      return <Home />;
    default:
      return null;
  }
};
