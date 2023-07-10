import React from "react";

const Models = () => {
  const getRandomDate = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp).toLocaleDateString('en-UK');
  };
  const modelArray = [
    {
      name: "Model_1",
      date: getRandomDate(),
    },
    {
      name: "Model_2",
      date: getRandomDate(),
    },
    {
      name: "Model_3",
      date: getRandomDate(),
    },
    {
      name: "Model_4",
      date: getRandomDate(),
    },
    {
      name: "Model_5",
      date: getRandomDate(),
    },
    {
      name: "Model_6",
      date: getRandomDate(),
    },
  ];
  return (
    <>
      {modelArray.map((key) => (
        <div className="flex border-b border-black pb-4 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="violet" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
          <div className="w-2/6">
            <h2>{key.name}</h2>
          </div>
          <div className="w-2/6"></div>
          <div className="w-1/6"></div>
          <div className="w-1/6">{key.date}</div>
        </div>
      ))}
    </>
  );
};

export default Models;
