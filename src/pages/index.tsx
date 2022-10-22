import { api } from 'config/api'
import CarsList from 'Home/Cars/CarsList'
import CarModelsList from 'Home/Models/CarModelsList'
import Footer from 'shared/footer/Footer'
import Hero from 'shared/hero/Hero'

const Home = ({ data, cars }: { data: any; cars: any }) => {
  return (
    <main className=''>
      <Hero />
      <CarModelsList carsModelList={data?.makeList} />
      <CarsList carsList={cars.result} />
      <Footer />
    </main>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await api
    .get('/inventory/make?popular=true')
    .then((res) => res.data)
    .catch((err) => alert(err))

  const cars = await api
    .get(`/inventory/car/search?currentPage=10&pageSize=8`)
    .then((res) => res.data)
    .catch((err) => alert(err))

  return {
    props: {
      data,
      cars
    }
  }
}
