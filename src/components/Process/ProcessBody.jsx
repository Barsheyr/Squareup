import React from "react";
import { Processes } from "../../data";

const ProcessBody = () => {
  return (
    <div>
      <div className="space-y-10 py-32">
        {Processes.map((process, index) => {
          const { Header, paragraph, includes } = process;
          return (
            <div key={index}>
              <div className="text-white">
                <div>
                  <h1 className="text-3xl font-semibold"> {Header} </h1>
                  <p> {paragraph} </p>
                </div>

                <div className="mt-10 bg-grey20 border border-gray-800 w-[30%] p-3">
                  <p className="">{includes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessBody;
