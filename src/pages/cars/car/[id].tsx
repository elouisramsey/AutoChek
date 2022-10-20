import { CarInfo, CarInfoChildren } from 'components/CarDetails'
import Carousel from 'components/Carousel'
import { Paragraph } from 'components/DisplayText/DsiplayText'
import Tabs from 'components/tabs'
import { api } from 'config/api'
import { CardetailsProps } from 'Home/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
  singleCar: CardetailsProps
}

const tabs = [
  { id: 1, name: 'Tech Specs' },
  {
    id: 2,
    name: 'User Info.'
  },
  {
    id: 3,
    name: 'Others'
  }
]

const Item = ({ singleCar }: Props) => {
  const {
    carName,
    city,
    bodyType,
    country,
    engineType,
    exteriorColor,
    fuelType,
    hasWarranty,
    id,
    imageUrl,
    insured,
    interiorColor,
    isFeatured,
    marketplaceOldPrice,
    marketplacePrice,
    marketplaceVisibleDate,
    mileage,
    mileageUnit,
    model,
    ownerType,
    sellingCondition,
    state,
    transmission,
    vin,
    websiteUrl,
    year
  } = singleCar

  const [openTab, setOpenTab] = useState<number>(1)
  const [images, setImages] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCarImages = () => {
    setLoading(true)
    api.get(`/inventory/car_media?carId=R1nVTV4Mj`).then((res) => {
      //   console.log(res.data.carMediaList)
      setImages(res.data.carMediaList)
    })

    api
      .get(`/inventory/car_media?carId=${id}`)
      .then((res) => {
        // setImages(res.data.carMediaList)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        alert(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getCarImages()
  }, [])
  console.log(images)
  return (
    <div className='relative h-66vh flex flex-row overflow-hidden '>
      <div className='absolute bottom-0 left-0 w-1/2 bg-white top-0 h-full'>
        {images.length > 0 && !loading ? (
          <>
            {images
              .filter((image: any) => image.type?.slice(-3) === 'mp4')
              .map((image: any) => {
                return (
                  <div
                    key={image.id}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative'
                    }}
                    className={'bg-black h-full'}
                  >
                    <video controls width='100%'>
                      <source src={image.url} type={image.type} />
                      Sorry, your browser doesn't support videos.
                    </video>
                    {/* <ReactPlayer
                      playing={true}
                      width={'100%'}
                      height={'100%'}
                      url={[
                        {
                          src: image.url,
                          type: image.type
                        }
                      ]}
                      config={{
                        file: {
                          attributes: { autoPlay: true, controls: true }
                        }
                      }}
                    /> */}
                  </div>
                )
              })}
          
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              objectPosition='center'
              src={imageUrl}
              alt={carName}
              layout='fill'
              objectFit='contain'
            />
          </div>
        )}
      </div>
      <div className='w-1/2 bg-white absolute right-0 bottom-0 top-0 p-6'>
        <Tabs tabs={tabs} openTab={openTab} setOpenTab={setOpenTab} />
        {/* <Paragraph classNames='lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Technical Specifications
        </Paragraph> */}
        {openTab === 1 && (
          <CarInfo>
            <CarInfoChildren header={'Name'} value={carName || ''} />
            <CarInfoChildren header={'Name'} value={carName || ''} />
          </CarInfo>
        )}
        {openTab === 2 && (
          <CarInfo>
            <CarInfoChildren header={'Model'} value={model?.name || ''} />
            <CarInfoChildren header={'Name'} value={carName || ''} />
          </CarInfo>
        )}
        {openTab === 3 && (
          <CarInfo>
            <CarInfoChildren header={'State'} value={state || ''} />
            <CarInfoChildren header={'City'} value={city || ''} />
          </CarInfo>
        )}
      </div>
    </div>
  )
}

export default Item

export async function getStaticPaths() {
  let cars: any

  await api
    .get(`/inventory/car/search?currentPage=10&pageSize=2000`)
    .then((res) => {
      return (cars = res.data.result)
    })
    .catch((err) => alert(err))

  return {
    paths: cars?.map((car: CardetailsProps) => ({
      params: {
        id: car.id
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const singleCar = await getSingleCar(params.id)
  return { props: { singleCar } }
}

const getSingleCar = async (id: string | number) => {
  const res = await api.get(`/inventory/car/${id}`)
  return res.data
}
