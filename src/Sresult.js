import React from 'react'

const Sresult = (props) => {

    const img =`https://source.unsplash.com/random/500x400/?${props.image}`
  return (
    <div >
        <img  src={img}  alt="picture"/>
           </div>
  )
}

export default Sresult;