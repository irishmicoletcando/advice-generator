import { useState } from "react"

export default function App() {
  // Initial state is an object with empty id and advice fields
  const [ advices, setAdvices ] = useState({
    id: "117",
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  })

  function getAdviceText() {
    async function fetchNewAdvice() {
      const slip = await fetch("https://api.adviceslip.com/advice")
      const data = await slip.json()
      setAdvices(data.slip)
    }
    
    fetchNewAdvice()
  }
  

  return (
    <div className="bg-darkBlue min-h-screen font-manrope text-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-[340px] sm:max-w-[540px] bg-darkGrayishBlue px-6 sm:px-10 pt-10 pb-16 space-y-6 text-center rounded-2xl shadow-lg">
        <h1 className="text-xs sm:text-sm tracking-[0.3em] text-neonGreen font-bold">ADVICE #{advices.id}</h1>
        <p className="font-extrabold text-lightCyan text-[20px] sm:text-[28px] leading-tight">{advices.advice}</p>
        <div className="pt-4">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/>
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3"/>
                <rect x="14" width="6" height="16" rx="3"/>
              </g>
            </g>
          </svg>
        </div>
        <button onClick={getAdviceText} className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-neonGreen w-16 h-16 rounded-full flex items-center justify-center hover:shadow-[0_0_30px_rgba(82,255,168,0.7)] transition-shadow">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
          </svg>
        </button>
      </div>
    </div>
  )
}