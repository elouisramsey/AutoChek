import { Paragraph } from 'components/DisplayText/DsiplayText'
import Gallery from 'components/Gallery'
import SingleImage from 'components/Gallery/SingleImage'
import { CardetailsProps } from 'Home/types'
import React from 'react'

const AllCars = ({
  cars,
  pagination,
  heading
}: {
  cars: CardetailsProps[]
  pagination?: any,
  heading: string
}) => {
  return (
    <Gallery heading={heading}>
      {cars.map((car) => (
        <SingleImage
          marketplacePrice={car.marketplacePrice}
          key={car.id}
          img={car.imageUrl}
          title={car.title}
          to={`cars/car/${car.id}`}
        />
      ))}
    </Gallery>
  )
}

export default AllCars
