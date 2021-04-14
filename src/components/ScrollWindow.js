import React from "react"
import Box from "./Box"
import './ScrollWindow.css';

export default function ScrollWindow(props){
  console.log(props.boxes, "ScrollWindow")
  return(
    <div className = "scrollWindow">
    {
      props.boxes.map(number => {
        return <Box number = {number} />
      })
    }
    </div>
  )
}