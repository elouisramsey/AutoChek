import AllCars from 'Cars/AllCars'
import { Paragraph } from 'components/DisplayText/DsiplayText'
import { api } from 'config/api'
import { GetServerSideProps } from 'next'

type Props = {
  cars: any
}

function Cars({ cars }: Props) {
  return (
    <section>
      <AllCars
        heading='Cars for sale in Nigeria'
        pagination={cars.pagination}
        cars={cars.result}
      />
    </section>
  )
}

export default Cars

export async function getServerSideProps(context: any) {
    const page = context.query.hasOwnProperty('page')
      ? parseInt(context.query.page, 10)
      : 1

      console.log({
        query2: context.query.page
      })
  const cars = await api
    .get(`/inventory/car/search?page=${page}`)
    .then((res) => res.data)
    .catch((err) => alert(err))

  return {
    props: {
      cars
    }
  }
}

{
  /*

currentPage
: 
1
pageSize
: 
24
total
: 
5521
*/
}
