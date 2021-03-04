import React from 'react'
import covid from '@img/mascara-facial.png'

const ItemImg = () => {
  return (
    <section className="img__wrapper--center">
      <img src={covid} alt="Covid" title="Covid" width="150"/>
    </section>
  )
}

export default ItemImg