import AllCars from 'Cars/AllCars'
import Loader from 'components/loader/Loader'
import Pagination from 'components/pagination'
import { api } from 'config/api'
import { useEffect, useState } from 'react'

function Cars() {
  const [allCars, setAllCars] = useState<any>([])
  const [page, setPage] = useState<number>(1)
  let pageSize: number = 52

  // can use swr here if the currentpage was working
  const getAllCars = async () => {
    await api
      .get(`/inventory/car/search?currentPage=10&pageSize=4000`)
      .then((res) => setAllCars(res.data.result))
      .catch((err) => alert(err))
  }

  useEffect(() => {
    getAllCars()
  }, [])

  const pageData = allCars.slice(page * pageSize - pageSize, page * pageSize)

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


{
  /* 

import AllCars from 'Cars/AllCars'
import Pagination from 'components/pagination'
import { api } from 'config/api'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Loader from 'components/loader/Loader'
import { Paragraph } from 'components/DisplayText/DsiplayText'

type Props = {
  cars: any
}


function Cars() {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] =useState<number>(52)

const address =
  process.env.NEXT_PUBLIC_BASE_URL +
  `/inventory/car/search/?currentPage=10&pageSize=${pageSize}`

const fetcher = async (url: string) => {
  return await api.get(url).then((res) => res.data.result)
}

  const { data: cars, error } = useSWR(address, fetcher)

  if (error) <p>Loading failed...</p>
  if (!cars) <Loader />

  const pageData =
    cars?.length > 0 && cars.slice(page * pageSize - pageSize, page * pageSize)

  return (
    <section className='h-screen my-12'>
      {cars?.length > 0 && (
        <>
          <AllCars
            classNames='lg:py-8'
            heading='Cars for sale in Nigeria'
            cars={cars}
          />
          <Pagination
            onChangePage={(page) => setPage(page)}
            count={cars?.length}
            renderedCount={pageData.length}
            rowsPerPage={pageSize}
            page={page}
          />
        </>
      )}
    </section>
  )
}

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


*/
}

