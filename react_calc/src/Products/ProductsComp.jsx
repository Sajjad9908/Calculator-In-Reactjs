import React from 'react'

const ProductsComp = ({value}) => {
  let a=4
  let b=6
  console.log(a+b)
  return (
    <>
    <ul>Products Comp : {value.map((value , ind)=>(
      <li key={value}><strong>{value}</strong></li>
    ))}</ul>
    </>
  )
}

export default ProductsComp