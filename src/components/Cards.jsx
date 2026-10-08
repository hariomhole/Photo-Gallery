import React from 'react'

const Cards = (props) => {
  return (
    
    <div>
      <div key={props.idx}>
            <div  className='h-40 w-44 bg-black  overflow-hidden '>
                    <img className='h-full w-full object-cover rounded-2xl  '  src={props.ele.download_url} alt="img" />
          </div>

          <h2 className='font-bold'>{props.ele.author}</h2>
          <a  className='hover:underline text-blue-400' href={props.ele.url} target='_blank'>View Details</a>
          </div>
    </div>
  )
}

export default Cards
