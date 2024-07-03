import React from 'react';
import Home from "./ColorPixel Pages/Home/Home";

export const ColorPixel = () => {
  const currentRoute = window.location.pathname;

  switch (currentRoute) {
    case "/colorpixelhome":
      return <Home />;
    default:
      return null;
  }
};
