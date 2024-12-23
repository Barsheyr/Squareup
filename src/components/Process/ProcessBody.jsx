import React, { useState } from "react";
import { Processes, processNums } from "../../data";

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

                <div className="mt-10 bg-grey20 border border-gray-800 lg:w-[30%] p-3 rounded-md">
                  <p className="">{includes}</p>
                </div>

                <div className="grid lg:grid-cols-2">
                  {processNums.map((processNum, index) => {
                    const { num, numHead, numParagraph } = processNum;
                    return (
                      <div key={index}>
                        <div className="mt-10">
                          <div className="flex items-end space-x-5">
                            <p className="text-9xl text-green80 font-semibold">
                              {num}
                            </p>
                            <h1 className="text-2xl"> {numHead} </h1>
                          </div>
                          <h2 className="mt-10"> {numParagraph} </h2>
                        </div>
                      </div>
                    );
                  })}
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
