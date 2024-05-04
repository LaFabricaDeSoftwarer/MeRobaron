import React from 'react'

const SummaryList = ({ label, value }) => {
  return (
    <div className='w-full bg-medium mb-2 p-1'>
      <ul>
        <li>
          <span className='text-xs'>{label}: </span>
          <span className='dark:text-gray-400'>{value}</span>
        </li>
      </ul>
    </div>
  )
}

export default SummaryList
