import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // what to be executed
        console.log("The count is: ", + count)

    }, [count]) // dependency array

    console.log("Before...................")

  return (
    <div>
      Count : {count}
      <button onClick={(e) => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
