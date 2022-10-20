import AllCars from 'Cars/AllCars'
import Pagination from 'components/pagination'
import { api } from 'config/api'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

type Props = {
  cars: any
}

function Cars() {
  const [allCars, setAllCars] = useState<any>([])
  const [pageSize, setPageSize] = useState<number>(52)
  const [page, setPage] = useState<number>(1)

  const pages = Math.ceil(allCars.length / pageSize)

  const t = async () => {
    await api
      .get(`/inventory/car/search?currentPage=10&pageSize=4000`)
      .then((res) => setAllCars(res.data.result))
      .catch((err) => alert(err))
  }

  useEffect(() => {
    t()
  }, [])

  const pageData = allCars.slice(page * pageSize - pageSize, page * pageSize)

  return (
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
  )
}

export default Cars

// export async function getServerSideProps(context: any) {
//   const page = context.query.hasOwnProperty('page')
//     ? parseInt(context.query.page, 10)
//     : 1
//   console.log({
//     query: context.query.page
//   })
//   const cars = await api
//     .get(`/inventory/car/search?page=10&pageSize=100`)
//     .then((res) => res.data)
//     .catch((err) => alert(err))

//   return {
//     props: {
//       cars
//     }
//   }
// }

