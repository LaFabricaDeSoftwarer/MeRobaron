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
            <li className='flex-grow relative'>
              <div className='absolute left-[12px] top-0 bottom-0 w-0 border-l-2 border-primary opacity-50 border-dashed' />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default StepList
