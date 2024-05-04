import React from 'react'

export default function Suggestions ({ suggestions, handleSuggestionClick }) {
  return (
    <div className='bg-medium p-2 absolute overflow-y-scroll overflow-x-hidden md:max-h-52 max-h-28 text-white z-50'>
      {suggestions.map((item) => (
        <div
          key={item.place_id}
          onClick={() => handleSuggestionClick(item.description)}
        >
          {item.description}
        </div>
      ))}
    </div>
  )
}
