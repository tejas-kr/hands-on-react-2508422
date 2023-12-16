import { useState, useEffect } from "react";

const title = document.title

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0) {
      document.title = `${title}--${count}`
    }
  })

  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {/* {
        count === 0 ? 'Click to Support' : `Supported ${count} times`
      }
       */}
      {
        (() => {if(count === 0){
            return 'Click to Support'
        } else if ((count > 0) && count <= 10) {
          return `Supported ${count} times`
        } else {
          return `Support well. ${count} times`
        }})()
      }
    </button>
  )
}