'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MeetTeachersData } from "@/lib/data";
import CalendlyLink from "@/components/CalendlyWidget";

const MeetingSection = () => {
  const [calendlyScriptLoaded, setCalendlyScriptLoaded] = useState(false);

  // Load Calendly script on mount
  useEffect(() => {
    // Check if the script is already loaded
    if (document.getElementById("calendly-script")) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.id = "calendly-script";  // Mark the script with an ID so we don't load it again
    script.async = true;

    // When the script loads, set the state to true
    script.onload = () => {
      setCalendlyScriptLoaded(true);
      console.log("Calendly script loaded!");
    };

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  const handleCheckAvailability = (meetingLink: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Check if the Calendly script is loaded
    if (calendlyScriptLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: meetingLink });
    } else {
      console.error("Calendly script is not loaded properly.");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-stone-800 rounded-md flex-1">
      <h1 className="text-lg font-semibold mb-4">Meeting Availability</h1>
      <table className="w-full text-left border-collapse border border-gray-200 dark:border-stone-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-stone-700">
            <th className="p-3 border border-gray-200 dark:border-stone-600">Teacher</th>
            <th className="p-3 border border-gray-200 dark:border-stone-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {MeetTeachersData.map((teacher) => (
            <tr
              key={teacher.id}
              className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurpleLight dark:border-stone-600 dark:even:bg-stone-900 dark:hover:bg-gray-700"
            >
              <td className="p-4 flex items-center gap-4">
                <Image
                  src={teacher.photo}
                  alt={`${teacher.name}'s photo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold">{teacher.name}</h3>
                  <p className="text-xs text-gray-500">{teacher.email}</p>
                </div>
              </td>
              <td className="p-4">
              <CalendlyLink 
              meetingLink={teacher.meeting} 
                buttonText="Check Availability" 
              />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingSection;
