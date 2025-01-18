import React from 'react'
import Child from './Child'
import Chair1 from '../../../../public/assets/chair1.jpg'
import PlusCart from '@/app/utilities/PlusCart'

function Parent() {
  return (
    <>
       <Child
        image = {Chair1.src}
        chairName = "Library Stool Chair"
        price = '40$'
        altName = "chair-1"
        logo = {<PlusCart />}
        />
    </>
  )
}

export default Parent