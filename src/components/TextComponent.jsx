import React from 'react'
import "../styles/textComponent.css"
import { Typography } from '@mui/material'
const TextComponent = ({TextComponentBox,TextComponentTitle,TextComponentDescription}) => {
  return (
    <div className={TextComponentBox}>
    <Typography style={{fontWeight:"bold",fontFamily:"fantasy"}} variant="h3">{TextComponentTitle}</Typography>
    <Typography variant="p">{TextComponentDescription}</Typography>
    </div>
  )
}

export default TextComponent