import Gallery from 'components/Gallery'
import SingleImage from 'components/Gallery/SingleImage'
import { CardetailsProps } from 'Home/types'
import React from 'react'

const AllCars = ({
  cars = [],
  classNames,
  heading
}: {
  cars: CardetailsProps[]
  classNames?: string
  heading: string
}) => {
  return (
    <Gallery heading={heading} classNames={classNames}>
      {cars.map((car) => (
        <SingleImage
          marketplacePrice={car.marketplacePrice}
          key={car.id}
          img={car.imageUrl}
          title={car.title}
          to={`/cars/car/${car.id}`}
        />
      ))}
    </Gallery>
  )
}

export default AllCars
