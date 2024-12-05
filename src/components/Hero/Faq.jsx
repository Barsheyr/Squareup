import React from "react";
import { faqs } from "../../data";

const Faq = () => {
  return (
    <div>
      <div className="text-center py-20 space-y-5 z-10 mt-10">
        <h1 className="text-4xl font-semibold tracking-widest">
          Frequently Asked Questions
        </h1>
        <p className="px-[12%]">
          Still you have any questions? Contact our Team via hello@squareup.com
        </p>
      </div>

      <div>
        <div className="space-y-10 mt-20">
          <div className="grid lg:grid-cols-2">
            {faqs.map((faq) => {
              const { id, Header, description, num } = faq;

              return (
                <div key={id}>
                  <div className="collapse collapse-plus bg-white99 border border-gray-800 p-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />

                    <div className="collapse-title lg:text-xl font-medium text-green80 flex gap-10">
                      <p className=""> {num} </p>
                      <p>{Header}</p>
                    </div>
                    <div className="collapse-content">
                      <p className="px-14 lg:text-base text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
