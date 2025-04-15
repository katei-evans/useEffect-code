import { useState, useEffect } from 'react'
import React from 'react'

const Randomimage = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        // sending fetch request to a random dog api
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then(data => setImage(data.message))
        .catch(e => console.log(e))
    }, [])

    if(!image) return <p>Loading...</p>

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  )
}

export default Randomimage
