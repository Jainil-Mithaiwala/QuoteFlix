import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './randomquote.css';

const RandomTipGenerator = () => {
  const [randomTipInfo, setRandomTipInfo] = useState('');
  const [randomTipHeading, setRandomTipHeading] = useState('');
  const [tipOfTheDayInfo, setTipOfTheDayInfo] = useState('');
  const [tipOfTheDayHeading, setTipOfTheDayHeading] = useState('');

  useEffect(() => {
    fetchRandomQuote();
    fetchTipOfTheDay();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://random-tech-tip-generator.onrender.com/');
      setRandomTipInfo(response.data.CyberSecurity_tip.info);
      setRandomTipHeading(response.data.CyberSecurity_tip.heading);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  const fetchTipOfTheDay = async () => {
    try {
      const response = await axios.get('https://tip-of-the-day-8lhm.onrender.com/');
      setTipOfTheDayInfo(response.data.tipsOfTheDayofTheDay.info);
      setTipOfTheDayHeading(response.data.tipsOfTheDayofTheDay.heading);
    } catch (error) {
      console.error('Error fetching tip of the day:', error);
    }
  };

  const handleRefresh = () => {
    fetchRandomQuote();
    fetchTipOfTheDay();
  };

  const copyRandomQuote = () => {
    const quoteText = `Heading: ${randomTipHeading}\nInfo: ${randomTipInfo}`;
    navigator.clipboard.writeText(quoteText).then(() => {
      console.log('Quote copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const copyTipOfTheDay = () => {
    const quoteText = `Heading: ${tipOfTheDayHeading}\nInfo: ${tipOfTheDayInfo}`;
    navigator.clipboard.writeText(quoteText).then(() => {
      console.log('Quote copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className='homecontainer'>
      <div className='container1'>
        <h2 className='Heading' style={{ margin: "0px 0px 15px 0px" }}>More Categories</h2>
        <ul>
          <li className='homecategories'><a href="/computer_maintenance_tips">Computer Maintenance</a></li>
          <li className='homecategories'><a href="/ai_and_machine_learning_tips">AI and Machine Learning</a></li>
          <li className='homecategories'><a href="/cyberSecurity_tips">CyberSecurity</a></li>
          <li className='homecategories'><a href="/smartphone_tips">Smartphone</a></li>
          <li className='homecategories'><a href="/cloud_storage_tips">Cloud Storage</a></li>
          <li className='homecategories'><a href="/internet_browsing_tips">Internet Browsing</a></li>
          <li className='homecategories'><a href="/troubleshooting_tips">Troubleshooting</a></li>
          <li className='homecategories'><a href="/data_backup_tips">Data Backup</a></li>
          <li className='homecategories'><a href="/email_management_tips">Email Management</a></li>
          <li className='homecategories'><a href="/productivity_tools_tips">Productivity Tools</a></li>
        </ul>
      </div>
      <div className='container2'>
        <div>
          <h1 className='Heading'>Tip of the Day</h1>
          <div className='box'>
            {tipOfTheDayHeading ? (
              <div>
                <p className='quotebox'>{tipOfTheDayHeading}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome'></p>
              </div>
            )}
          </div>
          <div className='box'>
            {tipOfTheDayInfo ? (
              <div>
                <p className='quotebox'>{tipOfTheDayInfo}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome'></p>
              </div>
            )}
          </div>
          <div className='btns'>
            <button className="bn32" onClick={copyTipOfTheDay}>Copy Tip of the Day</button>
          </div>
        </div>
        <div>
          <h1 className='Heading'>CyberSecurity Tip</h1>
          <div className='box'>
            {randomTipHeading ? (
              <div>
                <p className='quotebox'>{randomTipHeading}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome'></p>
              </div>
            )}
          </div>
          <div className='box'>
            {randomTipInfo ? (
              <div>
                <p className='quotebox'>{randomTipInfo}</p>
              </div>
            ) : (
              <div className='quotebox'>
                <p className='loaderhome'></p>
              </div>
            )}
          </div>
          <div className='btns'>
            <button className="bn32" onClick={handleRefresh}>Refresh Tip</button>
            <button className="bn32" onClick={copyRandomQuote} id="randomquotescopybtn">Copy Tip</button>
          </div>
        </div>
      </div>
      <div className='container3'>
        <ul>
          <h2 className='Heading' style={{ margin: "0px 0px 15px 0px" }}>More Categories</h2>
          <li className='homecategories'><a href="/software_update_tips">Software Updates</a></li>
          <li className='homecategories'><a href="/networking_tips">Networking</a></li>
          <li className='homecategories'><a href="/gadget_optimization_tips">Gadget Optimization</a></li>
          <li className='homecategories'><a href="/privacy_settings_tips">Privacy Settings</a></li>
          <li className='homecategories'><a href="/home_automation_tips">Home Automation</a></li>
          <li className='homecategories'><a href="/file_management_tips">File Management</a></li>
          <li className='homecategories'><a href="/system_performance_tips">System Performance</a></li>
          <li className='homecategories'><a href="/social_media_tips">Social Media</a></li>
          <li className='homecategories'><a href="/tech_accessories_tips">Tech Accessories</a></li>
          <li className='homecategories'><a href="/online_safety_tips">Online Safety</a></li>
        </ul>
      </div>
    </div>
  );
};

export default RandomTipGenerator;
