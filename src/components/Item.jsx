import React from 'react'

const Item = ({ data }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const formatDate = new Date(data.Date).toLocaleDateString('en-US', dateOptions)

  return (
    <li><strong>Date</strong>:{formatDate} - <strong>Cases:</strong>{data.Cases}</li>
  )
}

export default Item