import React from 'react'

const Title = ({text}) => {
  return (
   <>
   <h1 className='text-center mt-3'>{!text ? "text" : text}</h1>
   
   </>
  )
}

export default Title