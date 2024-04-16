import React from 'react'

export default function Suggestions ({ suggestions, handleSuggestionClick }) {
  return (
    <div className='bg-medium p-2 absolute overflow-y-scroll overflow-x-hidden w-96 max-h-52 text-white'>
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
