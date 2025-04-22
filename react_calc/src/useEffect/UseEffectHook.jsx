import React , { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [ name , setName  ]= useState("ali")
    const [ cast , setCast  ] = useState("awann")
    const [ clicked , setClicked ] = useState(false)
    useEffect(()=>{
      console.log("hi")
    },[clicked,name,cast])
    const generate=()=>{
      setCast("memon")
      setName("hello")
    }
  return (
    <>
    <button onClick={()=>setClicked(!clicked)} >click me</button>
    {clicked?<h1>hello this is clicked button</h1>: ""}
    </>
  )
}

export default UseEffectHook