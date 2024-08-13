import React from 'react'

const StepList = ({ steps, currentStep }) => {
  return (
    <ul className='list-none flex flex-col h-full max-h-[500px]'>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <li className='cursor-pointer text-sm flex items-center gap-2 py-2'>
            <div
              className={`
              border border-primary rounded-full w-[25px] h-[25px] flex items-center justify-center
              ${currentStep === index ? 'bg-secondary text-white' : 'text-medium opacity-50'}
            `}
            >
              {index + 1}
            </div>
            <div className={`mr-2 ${currentStep === index ? 'text-primary' : 'text-medium opacity-50'}`}>
              {step.props.stepLabel}
            </div>
          </li>
          {index < steps.length - 1 && (
            <li className='hidden md:flex-grow md:relative md:flex'>
              <div className='md:absolute md:left-[12px] md:top-0 md:bottom-0 md:w-0 md:border-l-2 border-primary opacity-50 border-dashed' />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default StepList
