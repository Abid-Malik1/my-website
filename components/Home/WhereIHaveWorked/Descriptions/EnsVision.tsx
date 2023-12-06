import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the mobile app development using Flutter, Dart, Firebase, MongoDb, Authentication, State Management,",
      keywords: ["Flutter", "Dart", "Firebase", "State Management"],
    },
    {
      text: "Conducted testing tasks to ensure App functionality and quality. Managed a large user base on the Mobile App",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented Mobile App design and enhanced interactivity.",
      keywords: ["Mobile App"],
    },
    {
      text: "Collaborated closely with the team in regular meetings",
      keywords: ["smart contracts", "ENS"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mobile App Developer <span className="text-AAsecondary">@ Flutter</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Feb 2020 - current</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://tnmco.uk/", "_blank")}
          >
            www.tnmco.uk
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
