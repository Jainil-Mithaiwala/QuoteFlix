import React from 'react';
import Home from "./Quoteflix Pages/Home/Home";
import LoveQuotes from "./Quoteflix Pages/Love/Love";
import FamilyQuotes from "./Quoteflix Pages/Family/Family";
import FriendsQuotes from "./Quoteflix Pages/Friends/Friends";
import InspirationalQuotes from "./Quoteflix Pages/Inspirational/Inspirational";
import EnvironmentalQuotes from "./Quoteflix Pages/Environmental/Environmental";
import BusinessQuotes from "./Quoteflix Pages/Business/Business";
import CreativityQuotes from "./Quoteflix Pages/Creativity/Creativity";
import EducationQuotes from "./Quoteflix Pages/Education/Education";
import LeadershipQuotes from "./Quoteflix Pages/Leadership/Leadership";
import ReligiousQuotes from "./Quoteflix Pages/Religious/Religious";
import LifeQuotes from "./Quoteflix Pages/Life/Life";
import TravelQuotes from "./Quoteflix Pages/Travel/Travel";
import CodingQuotes from "./Quoteflix Pages/Coding/Coding";
import MotivationalQuotes from "./Quoteflix Pages/Motivational/Motivational";
import NactureQuotes from "./Quoteflix Pages/Nacture/Nacture";
import LiteraryQuotes from "./Quoteflix Pages/Literary/Literary";
import SucessQuotes from "./Quoteflix Pages/Sucess/Sucess";
import FunnyQuotes from "./Quoteflix Pages/Funny/Funny";
import FoodQuotes from "./Quoteflix Pages/Food/Food";
import TimeQuotes from "./Quoteflix Pages/Time/Time";

export const QuoteFlix = () => {
  const currentRoute = window.location.pathname;

  switch (currentRoute) {
    case "/quoteflixhome":
      return <Home />;
    case "/love_quotes":
      return <LoveQuotes />;
    case "/family_quotes":
      return <FamilyQuotes />;
    case "/friends_quotes":
      return <FriendsQuotes />;
    case "/inspirational_quotes":
      return <InspirationalQuotes />;
    case "/environmental_quotes":
      return <EnvironmentalQuotes />;
    case "/time_quotes":
      return <TimeQuotes />;
    case "/creativity_quotes":
      return <CreativityQuotes />;
    case "/leadership_quotes":
      return <LeadershipQuotes />;
    case "/food_quotes":
      return <FoodQuotes />;
    case "/education_quotes":
      return <EducationQuotes />;
    case "/business_quotes":
      return <BusinessQuotes />;
    case "/funny_quotes":
      return <FunnyQuotes />;
    case "/sucess_quotes":
      return <SucessQuotes />;
    case "/religious_quotes":
      return <ReligiousQuotes />;
    case "/life_quotes":
      return <LifeQuotes />;
    case "/travel_quotes":
      return <TravelQuotes />;
    case "/coding_quotes":
      return <CodingQuotes />;
    case "/motivational_quotes":
      return <MotivationalQuotes />;
    case "/nature_quotes":
      return <NactureQuotes />;
    case "/literary_quotes":
      return <LiteraryQuotes />;
    default:
      return null;
  }
};
