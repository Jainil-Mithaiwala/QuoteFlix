import React from 'react';
import './Footer.css';

export default function App() {
  return (
    <body>
    <footer className='Footer'>
      <div className='container'>
      <div className='morecategoties'>
          <h3 className='FooterHeading'>More Categories</h3>
      </div>
        <div className='row'>
          <div className='Columns'>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/family_quotes' className='categories'>
                  Family
                </a>
              </li>
              <li>
                <a href='/friends_quotes' className='categories'>
                  Friends
                </a>
              </li>
              <li>
                <a href='/love_quotes' className='categories'>
                  Love
                </a>
              </li>
              <li>
                <a href='/inspirational_quotes' className='categories'>
                  Inspirational
                </a>
              </li>
              <li>
                <a href='/environmental_quotes' className='categories'>
                  Environmental
                </a>
              </li>
              <li>
                <a href='/time_quotes' className='categories'>
                Time
                </a>
              </li>
              <li>
                <a href='/creativity_quotes' className='categories'>
                Creativity
                </a>
              </li>
            </ul>
          </div>

          <div className='Columns'>
            <ul className='list-unstyled mb-0'>
            <li>
                <a href='/sucess_quotes' className='categories'>
                Sucess
                </a>
              </li>
              <li>
                <a href='/political_quotes' className='categories'>
                Political
                </a>
              </li>
              <li>
                <a href='/funny_quotes' className='categories'>
                Funny
                </a>
              </li>
              <li>
                <a href='/business_quotes' className='categories'>
                Business
                </a>
              </li>
              <li>
                <a href='/education_quotes' className='categories'>
                Education
                </a>
              </li>
              <li>
                <a href='/food_quotes' className='categories'>
                Food
                </a>
              </li>
              <li>
                <a href='/leadership_quotes' className='categories'>
                Leadership
                </a>
              </li>
            </ul>
          </div>
          <div className='Columns'>
            <ul className='list-unstyled mb-0'>
            <li>
                <a href='/religious_quotes' className='categories'>
                Religious
                </a>
              </li>
              <li>
                <a href='/life_quotes' className='categories'>
                  Life
                </a>
              </li>
              <li>
                <a href='/travel_quotes' className='categories'>
                Travel
                </a>
              </li>
              <li>
                <a href='/coding_quotes' className='categories'>
                  Coding
                </a>
              </li>
              <li>
                <a href='/motivational_quotes' className='categories'>
                  Motivational
                </a>
              </li>
              <li>
                <a href='/nacture_quotes' className='categories'>
                Nacture
                </a>
              </li>
              <li>
                <a href='/literary_quotes' className='categories'>
                Literary
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </body>
  );
}
