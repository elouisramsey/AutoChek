import SingleImage from 'components/Gallery/SingleImage'
import Layout from 'Home/shared/Layout'
import { CardetailsProps } from 'Home/types'
import SingleCarItem from './SingleCarItem'

type Props = {
  carsList: CardetailsProps[]
}

function CarsList({ carsList }: Props) {
  return (
    <Layout
      text='See more cars'
      to='/cars/all/2'
      subtitle='Limited reservations on upcoming cars'
      title='Collection of the best affordable cars'
    >
      {carsList.map((car) => (
        <SingleImage
          marketplacePrice={car.marketplacePrice}
          key={car.id}
          img={car.imageUrl}
          title={car.title}
          to={`cars/car/${car.id}`}
        />
      ))}
    </Layout>
  )
}

export default CarsList
