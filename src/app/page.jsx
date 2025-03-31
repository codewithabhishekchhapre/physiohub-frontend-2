"use client"
import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/header&footer/Header'
import Image from 'next/image'
import { Card, CardContent } from '../components/ui/card';
import { Activity, LineChart } from 'lucide-react';

function Home() {
  
      const [animated, setAnimated] = useState(false);
      const [percent, setPercent] = useState(0);
      const directionRef = useRef(1);

      const data = [
        { label: "Jan", value: 40 },
        { label: "Feb", value: 80 },
        { label: "Mar", value: 60 },
        { label: "Apr", value: 30 },
        { label: "May", value: 45 },
        { label: "Jun", value: 70 },
    ];

  
      useEffect(() => {
          const interval = setInterval(() => {
              setPercent((prev) => {
                  let next = prev + directionRef.current;
                  if (next >= 70) directionRef.current = -1;
                  else if (next <= 0) directionRef.current = 1;
                  return next;
              });
          }, 55); // Slower animation speed (30ms per step)
  
          return () => clearInterval(interval);
      }, []);
  
  
      const radius = 40;
      const stroke = 8;
      const normalizedRadius = radius - stroke / 2;
      const circumference = 2 * Math.PI * normalizedRadius;
      const strokeDashoffset = circumference - (percent / 100) * circumference;
  
      useEffect(() => {
          const timeout = setTimeout(() => setAnimated(true), 3000);
          return () => clearTimeout(timeout);
      }, []);
  
  return (
    <>
      <Header />
      <div className="h-full w-full">
      <section className="relative bg-gradient-to-r from-gray-100 to-purple-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm text-purple-600 font-semibold">OVER 200+ RESOURCES</p>
        <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-2">
          Master Your <br /> <span className="text-purple-600">Physiotherapy</span> <br /> Skills Now!
        </h1>
        <p className="text-gray-600 mt-4 max-w-md">
          Maximize your physiotherapy skills with our expert-led courses and tailored resources.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">Get Started</button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-200">Complete Quiz</button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex w-[50%]">
                        {/* First Column (takes max space) */}
                        <div className="flex-1 flex flex-col justify-between">
                            <Card className="w-full max-w-[14rem] rounded-[20px] shadow-md overflow-hidden mb-5 self-end">
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col items-start gap-2">
                                            <p className="text-sm font-medium text-black">Over time</p>
                                            <h2 className="text-2xl font-bold text-black">$40K</h2>
                                            <p className="text-xs text-gray-500">Last 7 days</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-4">
                                            <LineChart className="h-5 w-5 text-purple-500" />

                                            <div className="text-xs px-2 py-[2px] rounded-full bg-purple-100 text-purple-700 font-medium flex items-center gap-1">
                                                <Activity className="w-3 h-3" />
                                                25%
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-full relative rounded-lg overflow-hidden mt-10">
                                        <img
                                            src="/auth-activity.png"
                                            alt="Muscle Stats"
                                            // fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="w-[18rem] rounded-[20px] bg-white shadow-md">
                                <CardContent className="flex flex-col justify-between">
                                    <h3 className="text-[#1F1F1F] text-[16px] font-semibold mb-6">
                                        Performance over time
                                    </h3>
                                    <div className="flex justify-between items-end">
                                        {data.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-[20px] h-[100px] bg-gray-200 rounded-sm overflow-hidden relative">
                                                    <div
                                                        className={`absolute bottom-0 w-full bg-[#F593D5] rounded-sm animate-bar`}
                                                        style={{
                                                            height: `${item.value}%`,
                                                            animationDelay: `${index * 0.2}s`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-[12px] text-[#333]">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Second Column (fits content) */}
                        <div className="flex-none flex mt-38 justify-center text-center w-1/2">
                            {/* Your content here */}
                            <Card className="w-[11rem] rounded-[20px] shadow-md relative overflow-visible h-fit">
                                <div className="absolute -top-18 -right-10 -translate-x-1/2 z-10">
                                    <img
                                        src="/bird-ping.png" // Replace with your penguin image path
                                        alt="Penguin"
                                        width={100}
                                        height={100}
                                    // fill
                                    />
                                </div>

                                <CardContent className="flex flex-col items-center justify-center mt-4">
                                    <h3 className="text-[22px] font-semibold text-gray-800 mb-4 w-full">
                                        Quiz Score
                                    </h3>

                                    <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                                        <circle
                                            stroke="#E5E7EB"
                                            fill="transparent"
                                            strokeWidth={stroke}
                                            r={normalizedRadius}
                                            cx={radius}
                                            cy={radius}
                                        />
                                        <circle
                                            stroke="#34D1C4"
                                            fill="transparent"
                                            strokeWidth={stroke}
                                            strokeLinecap="round"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            r={normalizedRadius}
                                            cx={radius}
                                            cy={radius}
                                        />
                                    </svg>

                                    <span className="absolute text-xl font-bold text-[#111] mt-11 ml-2">
                                        {Math.round(percent)}%
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
    </section>
      </div>
    </>
  )
}

export default Home