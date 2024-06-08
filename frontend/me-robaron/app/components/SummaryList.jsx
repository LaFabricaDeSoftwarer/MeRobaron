import React from 'react'

const SummaryList = ({ label, value }) => {
  return (
    <div className='w-full mb-1'>
      <ul>
        <li>
          <span className='text-xs'>{label}: </span>
          <span className='text-xs'>{value}</span>
        </li>
      </ul>
    </div>
  )
}

export default SummaryList
