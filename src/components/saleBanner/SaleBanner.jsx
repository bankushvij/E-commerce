import React, { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`10/12/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};
function SaleBanner() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  return (
    <>
    <div className="lg:m-6 lg:p-4  ">
      <div className="lg:flex w-full md:w-full">
        <div className="lg:w-1/2 lg:h-96 w-100 h-72 m-0">
         <div className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover 
                bg-[url('https://images.pexels.com/photos/2829369/pexels-photo-2829369.jpeg?auto=compress&cs=tinysrgb&w=600')]">

         </div>
        </div>
        <div className="bg-gray-200 lg:w-1/2 lg:h-auto h-72 static flex flex-col justify-center">
          <div className="w-52 bg-white rounded-full h-52 text-center mx-auto">
            <div className="flex flex-col items-center justify-center align-middle p-12 ">
              <h2 className="text-center text-xl ">DISCOUNT</h2>
              <h1 className="text-center text-5xl text-red-800 font-mono">
                Summer2022
              </h1>

              <h4 className="text-center text-xl">
                Sale <span className="text-red-400">50%</span>
              </h4>
            </div>
          </div>
          <div className="w-auto mx-auto ">
            <h1 className="flex flex-row gap-3 items-center">
              <span>
                <span className="lg:text-4xl text-2xl text-red-600 font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-lg text-black"> Days </span>
              </span>
              <span>
                <span className="lg:text-4xl text-2xl text-red-600 font-bold">
                  {timeLeft.hours}
                </span>
                <span className="text-lg text-black"> Hour </span>
              </span>

              <span>
                <span className="lg:text-4xl text-2xl text-red-600 font-bold">
                  {timeLeft.minutes}
                </span>
                <span className="text-lg text-black"> Min. </span>
              </span>
              <span>
                <span className="lg:text-4xl text-2xl text-red-600 font-bold">
                  {timeLeft.seconds}
                </span>
                <span className="text-lg text-black"> Sec </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SaleBanner;
