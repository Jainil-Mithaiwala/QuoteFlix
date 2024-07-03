import React from "react";
import TechBitsHome from "./TechBits Pages/Techbits Home/TechBits Home";
import SoftwareUpdatesTip from "./TechBits Pages/Software Updates/Software Updates";
import ComputerMaintenanceTip from "./TechBits Pages/Computer Maintenance/Computer Maintenance";
import AIMachineLearningTip from "./TechBits Pages/AI and Machine Learning/AI and Machine Learning";
import CybersecurityTip from "./TechBits Pages/Cybersecurity/Cybersecurity";
import SmartphoneTips from "./TechBits Pages/Smartphone Tips/Smartphone Tips";
import CloudStorageTip from "./TechBits Pages/Cloud Storage/Cloud Storage";
import InternetBrowsingTip from "./TechBits Pages/Internet Browsing/Internet Browsing";
import TroubleshootingTip from "./TechBits Pages/Troubleshooting/Troubleshooting";
import DataBackupTip from "./TechBits Pages/Data Backup/Data Backup";
import EmailManagementTip from "./TechBits Pages/Email Management/Email Management";
import ProductivityToolsTip from "./TechBits Pages/Productivity Tools/Productivity Tools";
import NetworkingTip from "./TechBits Pages/Networking/Networking";
import GadgetOptimizationTip from "./TechBits Pages/Gadget Optimization/Gadget Optimization";
import PrivacySettingsTip from "./TechBits Pages/Privacy Settings/Privacy Settings";
import HomeAutomationTip from "./TechBits Pages/Home Automation/Home Automation";
import FileManagementTip from "./TechBits Pages/File Management/File Management";
import SocialMediaTip from "./TechBits Pages/Social Media/Social Media";
import TechAccessoriesTip from "./TechBits Pages/Tech Accessories/Tech Accessories";
import OnlineSafetyTip from "./TechBits Pages/Online Safety/Online Safety";
import SystemPerformanceTip from "./TechBits Pages/System Performance/System Performance";

export const TechBits = () => {
  const currentRoute = window.location.pathname;

  switch (currentRoute) {
    case "/techbitshome":
      return <TechBitsHome />;
    case "/software_update_tips":
      return <SoftwareUpdatesTip />;
    case "/computer_maintenance_tips":
      return <ComputerMaintenanceTip />;
    case "/ai_and_machine_learning_tips":
      return <AIMachineLearningTip />;
    case "/cyberSecurity_tips":
      return <CybersecurityTip />;
    case "/smartphone_tips":
      return <SmartphoneTips />;
    case "/cloud_storage_tips":
      return <CloudStorageTip />;
    case "/internet_browsing_tips":
      return <InternetBrowsingTip />;
    case "/troubleshooting_tips":
      return <TroubleshootingTip />;
    case "/data_backup_tips":
      return <DataBackupTip />;
    case "/email_management_tips":
      return <EmailManagementTip />;
    case "/productivity_tools_tips":
      return <ProductivityToolsTip />;
    case "/networking_tips":
      return <NetworkingTip />;
    case "/gadget_optimization_tips":
      return <GadgetOptimizationTip />;
    case "/privacy_settings_tips":
      return <PrivacySettingsTip />;
    case "/home_automation_tips":
      return <HomeAutomationTip />;
    case "/file_management_tips":
      return <FileManagementTip />;
    case "/social_media_tips":
      return <SocialMediaTip />;
    case "/tech_accessories_tips":
      return <TechAccessoriesTip />;
    case "/online_safety_tips":
      return <OnlineSafetyTip />;
    case "/system_performance_tips":
      return <SystemPerformanceTip />;
    default:
      return null;
  }
};
