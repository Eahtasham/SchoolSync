import React, { useEffect, useState } from "react";

interface CalendlyLinkProps {
  meetingLink: string;
  buttonText?: string;
  className?: string;
}

const CalendlyLink: React.FC<CalendlyLinkProps> = ({ 
  meetingLink, 
  buttonText = "Schedule time with me",
  className = "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
}) => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode color configuration
  const darkModeColors = {
    backgroundColor: "0b0a0a",     // Very dark background
    textColor: "b5b4b4",           // Soft gray text
    primaryColor: "3f88f3"         // Bright blue accent
  };

  const lightModeColors = {
    backgroundColor: "ffffff",      // White background
    textColor: "000000",            // Black text
    primaryColor: "0056b3"          // Deep blue accent
  };

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Check if Calendly is already loaded globally
    if (window.Calendly) {
      setCalendlyLoaded(true);
      return;
    }

    // Check if any Calendly script is already loaded
    const existingScript = document.getElementById("calendly-script");
    if (existingScript) {
      // If a script exists, wait for it to load
      existingScript.addEventListener('load', () => {
        setCalendlyLoaded(true);
      });
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.id = "calendly-script";
    script.async = true;

    // Create link element for Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    link.id = "calendly-css";

    // Handle script loading
    script.onload = () => {
      setCalendlyLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load Calendly script");
      setCalendlyLoaded(false);
    };

    // Append to document
    document.head.appendChild(link);
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleScheduleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Determine current color scheme
    const colors = isDarkMode ? darkModeColors : lightModeColors;

    // Construct Calendly URL with color parameters
    const colorizedMeetingLink = `${meetingLink}${meetingLink.includes('?') ? '&' : '?'}background_color=${colors.backgroundColor}&text_color=${colors.textColor}&primary_color=${colors.primaryColor}`;

    if (calendlyLoaded && window.Calendly) {
      try {
        window.Calendly.initPopupWidget({ url: colorizedMeetingLink });
      } catch (error) {
        console.error("Error initializing Calendly popup:", error);
      }
    } else {
      console.warn("Calendly is not fully loaded yet. Please try again.");
    }
  };

  return (
    <button 
      onClick={handleScheduleClick} 
      className={className}
      disabled={!calendlyLoaded}
    >
      {buttonText}
    </button>
  );
};

export default CalendlyLink;