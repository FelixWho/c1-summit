import React from 'react'

const Direction = ({ restaurant }) => {
  const link =
    'https://www.google.com/maps/search/?api=1&query=' +
    restaurant.latitude +
    ',' +
    restaurant.longitude
  console.log(link)

  return (
    <div>
      <a href={link} target='_blank'>
        <button style={{ textAlign: 'center', width: '200px' }}>
          Open in Google Maps
        </button>
      </a>
    </div>
  )
}

export default Direction
