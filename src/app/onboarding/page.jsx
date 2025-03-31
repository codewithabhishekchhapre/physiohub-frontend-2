'use client'

import { useEffect, useState } from "react"
import StartEnd from "./start-end"
import Steps from "./steps"
import { useRouter } from "next/navigation"


export default function Onboarding() {
  const [step, setStep] = useState(null); // Start with null to avoid SSR mismatch
  const router = useRouter();

  useEffect(() => {
    setStep(0); // Set initial state after component mounts
  }, []);
  if (step === null) return null; // Prevent rendering mismatched content
const levels = [
  {
    title: 'Beginner',
    subTitle: 'Starting to learn from the basics to build a strong foundation.',
    icon: '/badge1.png',
  },
  {
    title: 'Intermediate',
    subTitle: 'Starting to learn from the basics to build a strong foundation.',
    icon: '/badge2.png',
  },
  {
    title: 'Advanced',
    subTitle: 'Starting to learn from the basics to build a strong foundation.',
    icon: '/badge3.png',
  }
]

const pace = [
  {
    title: 'Relaxed',
    subTitle: '15 minutes per day.',
    icon: '/lazyclock.png',
  },
  {
    title: 'Regular',
    subTitle: '30 minutes per day.',
    icon: '/proclock.png',
  },
  {
    title: 'Intensive',
    subTitle: '1 hour per day.',
    icon: '/clock.png',
  }
]

const area = [
  [
    {
      title: 'Sports',
      subTitle: 'Focus on performance enhancement for athletes.',
      icon: '/workout.png',
    },
    {
      title: 'Pediatric',
      subTitle: 'Specialized care for infants, children, and adolescents.',
      icon: '/patientbed.png',
    },
  ],
  [
    {
      title: 'Neurological',
      subTitle: 'Rehabilitation for individuals with neurological disorders.',
      icon: '/helpdisable.png',
    },
    {
      title: 'Othopedic',
      subTitle: 'Treatment of musculoskeletal injuries and conditions.',
      icon: '/patientwithdoc.png',
    },
  ],
  [
    {
      title: 'Cardiopulmory',
      subTitle: 'Improving heart & lung function through exercises.',
      icon: '/disableonchair.png',
    },
    {
      title: 'Geriatic',
      subTitle: 'Care tailored for older adults to maintain mobility.',
      icon: '/disable.png',
    },
  ],

]

const notifications = [
  {
    title: 'Daily',
    subTitle: 'Receive updates and reminders every day to stay on track.',
    icon: '/alarm.png',
  },
  {
    title: 'Weekly',
    subTitle: 'Get a summary of your progress once a week.',
    icon: '/calendar.png',
  },
  {
    title: 'Only for important updates',
    subTitle: 'Receive notifications only for major updates.',
    icon: '/tooltip.png',
  }
]

const goals = [
  {
    title: 'Gain foundationl knowledge',
    subTitle: 'Build a solid understanding of basic concepts',
    icon: '/info.png',
  },
  {
    title: 'Prepare for exams',
    subTitle: 'Focus on key topics to excel in your exams.',
    icon: '/exam.png',
  },
  {
    title: 'Improve clinical skills',
    subTitle: 'Enhance your hands-on practical knowledge.',
    icon: '/heart.png',
  },
  {
    title: 'Speciliaze in a specific area',
    subTitle: 'Deepen your expertise in physiotherapy.',
    icon: '/firstaid.png',
  }
]
  
  const getStep = (step) => {
    switch (step) {
      case 0:
        return <StartEnd onClick={()=>setStep(1)}/>
      case 1:
        return <Steps title="Set Your Level" subTitle="Please select your current level of knowledge in physiotherapy." data={levels} onNext={setStep} step={1}/>
      case 2:
        return <Steps title="Choose Your Learning Pace" subTitle="How much time can you dedicate to learning each week?" data={pace} onNext={setStep}  step={2}/>
      case 3:
        return <Steps title="Select Your Areas of Interest" subTitle="What areas of physiotherapy are you most interested in? (Select all that apply)" isMulti data={area} onNext={setStep} step={3}/>
      case 4:
        return <Steps title="Personalized Goals" subTitle="What are your learning goals?" data={goals} onNext={setStep} isMulti step={4}/>
      case 5:
          return <Steps title="Notification Preferences" subTitle="How often would you like to receive notifications and reminders?" data={notifications} onNext={setStep} step={5}/> 
      case 6:
        return <StartEnd isEnd={true} onClick={()=>router.push('/user/dashboard')}/>
    }
  }
  return <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
    {getStep(step)}
  </div>
}