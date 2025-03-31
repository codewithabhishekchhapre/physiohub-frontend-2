'use client'

import { Button } from "../../components/ui/button.jsx";
import "./onboarding.css";

export default function StartEnd({isEnd,onClick}) {

  return (
    <>
      <div className="flex py-6 px-10 w-full">
        <img className="w-[170px]" src={'/logo-on-light.png'} alt="Logo" />
      </div>

      <div className="flex p-10 flex-col flex-grow items-center justify-center w-full sm:w-[60%]">
        {/* Content goes here */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg relative">
          <h2 className="text-xl font-semibold text-gray-700">{isEnd ? "All Set!" : "Welcome to PhysioHub!"}</h2>
          <p className="text-gray-500 mt-2">
            {isEnd ? "You're ready to start learning. Let's begin your first lesson.":"Let's get you started on your journey to mastering physiotherapy."}
          </p>
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-white border-l-transparent border-r-transparent"></div>
        </div>
        <img
          src="/bird-flying.png"
          alt="Penguin"
          className="h-40 w-40 mt-10"
        />
        <Button
          onClick={onClick}
          variant="solid"
          className="px-8 py-3 text-white bg-[#6c4ce6] rounded-lg mt-10"
        >
          {isEnd ? 'Start Learning':'Get Started'}
        </Button>
      </div>
    </>
  );
}