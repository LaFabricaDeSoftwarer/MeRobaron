import React from 'react'

const StepList = ({ steps, currentStep }) => {
  return (
    <ul className='list-none p-4 flex flex-col items-start '>
      {steps.map((step, index) => (
        <li
          key={index}
          className='cursor-pointer text-sm mb-4 flex items-center justify-start'
        >
          <div className={`border-2 mr-2 border-green rounded-full px-2 py-0.5  ${currentStep === index ? 'bg-green text-white' : ' text-white opacity-50'}`}>{index + 1}</div>
          <div className={`mr-2 ${currentStep === index ? 'text-white' : 'text-white opacity-50'}`}>{step.props.stepLabel}</div>
        </li>
      ))}
    </ul>
  )
}

export default StepList
