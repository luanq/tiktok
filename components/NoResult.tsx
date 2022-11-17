import React from 'react'

//另一种为props.text赋予类型的写法
interface IProps{
    text:string
}

const NoResult = ({text}:IProps) => {
  return (
    <div>
      
    </div>
  )
}

export default NoResult
