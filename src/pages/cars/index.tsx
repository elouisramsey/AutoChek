import AllCars from 'Cars/AllCars'
import Loader from 'components/loader/Loader'
import Pagination from 'components/pagination'
import { api } from 'config/api'
import { useEffect, useState } from 'react'

type Props = {
  cars: any
}

function Cars({ cars }: Props) {
  const [allCars, setAllCars] = useState<any>([])
  let pageSize: number = 52
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    setAllCars(cars)
  }, [])

  const pageData =
    allCars.length > 0 &&
    allCars?.slice(page * pageSize - pageSize, page * pageSize)

  return (
    <>
      {allCars.length > 0 ? (
        <section className='h-screen my-12'>
          <AllCars
            classNames='lg:py-8'
            heading='Cars for sale in Nigeria'
            cars={pageData}
          />
          <Pagination
            onChangePage={(page) => setPage(page)}
            count={allCars.length}
            renderedCount={pageData.length}
            rowsPerPage={pageSize}
            page={page}
          />
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const cars = await api
    .get(`/inventory/car/search?currentPage=10&pageSize=4000`)
    .then((res) => res.data.result)
    .catch((err) => alert(err))

  return {
    props: {
      cars
    }
  }
}

export default Cars

// export async function getServerSideProps(context: any) {
//   const page = context.query.hasOwnProperty('page')
//     ? parseInt(context.query.page, 10)
//     : 1

//   console.log({
//     query2: context.query.page
//   })
//   const cars = await api
//     .get(`/inventory/car/search?page=${page}`)
//     .then((res) => res.data)
//     .catch((err) => alert(err))

//   return {
//     props: {
//       cars
//     }
//   }
// }
