import React from 'react'

const page = ({params}) => {
    console.log(params.category)
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  )
}

export default page
