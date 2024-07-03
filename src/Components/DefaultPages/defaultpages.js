import React from "react";
import RegisterPage from "./Default Pages/Register/register";
import LoginPage from "./Default Pages/Login/Login";
import ProfilePage from "./Default Pages/Profile/ProfilePage";
import ProfileUpdate from "./Default Pages/ProfileUpdate/ProfileUpdate";
import Contectus from "./Default Pages/Contectus/Contectus";
import PrivacyPolicy from "./Default Pages/Privacy Policy/PrivacyPolicy";
import TermsOfService from "./Default Pages/Terms of Service/TermsOfService";
import FeedbackForm from "./Default Pages/FeedbackForm/FeedbackForm";
import FAQs from "./Default Pages/FAQs/FAQs";
import AboutUs from "./Default Pages/AboutUs/AboutUs";
import PagenotFound from "./Default Pages/PageNotFound/PageNotFound";
import Homepage from "./Default Pages/Home Page/homepage";
import { QuoteFlix } from "../QuoteFlix/Quoteflix";
import { TechBits } from "../TechBits/TechBits";
import { ColorPixel } from "../ColorPixel/ColorPixel";
import { FactFlix } from "../FactFlix/FactFlix";
 
export const DefaultPages = () => {
  const currentRoute = window.location.pathname;

  if (currentRoute.startsWith("/quoteflix") || currentRoute.endsWith("quotes")) {
    return <QuoteFlix />;
  } else if (currentRoute.startsWith("/factflix") || currentRoute.endsWith("fact")) {
    return <FactFlix />;
  } else if (currentRoute.startsWith("/colorpixel") || currentRoute.endsWith("color")) {
    return <ColorPixel />;
  } else if (currentRoute.startsWith("/techbits") || currentRoute.endsWith("tips")) {
    return <TechBits />;
  } else {
    switch (currentRoute) {
      case "/registration_page":
        return <RegisterPage />;
      case "/login_page":
        return <LoginPage />;
      case "/profile":
        return <ProfilePage />;
      case "/profileupdate":
        return <ProfileUpdate />;
      case "/contect_us":
        return <Contectus />;
      case "/privacy-policy":
        return <PrivacyPolicy />;
      case "/terms-of-service":
        return <TermsOfService />;
      case "/feedback":
        return <FeedbackForm />;
      case "/faq":
        return <FAQs />;
      case "/about_us":
        return <AboutUs />;
      case "/":
        return <Homepage />;
      default:
        return <PagenotFound />;
    }
  }
};
