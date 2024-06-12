import React, { useState } from 'react'
import {useefekt } from '../../hook/useefekt'

const Category = () => {
    // const [category, setCategory] = useState('all')
    // let url = `/products/${category === 'all' ? "" : `/category/${category}`}?limit=8`
    // const {Category} = useefekt(url,category)

  return (
    <>
      <div className='container'>
       <h1 className='title'>Готовые наборы</h1>
      </div>
    </>
  )
}

export default Category