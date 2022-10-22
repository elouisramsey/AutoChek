import { CarInfo, CarInfoChildren } from 'components/CarDetails'
import Carousel from 'components/Carousel'
import Tabs from 'components/tabs'
import { api } from 'config/api'
import { CardetailsProps } from 'Home/types'
import Image from 'next/image'
import router from 'next/router'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Footer from 'shared/footer/Footer'
import { convertCurrency } from 'shared/functions/functions'

type Props = {
  singleCar: CardetailsProps
}

const tabs = [
  { id: 1, name: 'General Information' },
  {
    id: 2,
    name: 'Technical Information '
  },
  {
    id: 3,
    name: 'Aesthetics & Pricing'
  }
]

const Item = ({ singleCar }: Props) => {


  const [openTab, setOpenTab] = useState<number>(1)
  const [images, setImages] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCarImages = () => {
    setLoading(true)

    api
      .get(`/inventory/car_media?carId=${singleCar.id}`)
      .then((res) => {
        setImages(res.data.carMediaList)
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

  return (
    <div className='relative lg:h-66vh lg:flex flex-row overflow-hidden '>
      <div className='lg:absolute bottom-0 left-0 lg:w-1/2 bg-white top-0 h-full'>
        {images.length > 0 && !loading ? (
          <Carousel>
            {images.map((image: any) => {
              const checkIfVideo = image.type?.slice(-3)
              return (
                <>
                  {checkIfVideo === 'mp4' && (
                    <video
                      key={image.id}
                      controls
                      width='100%'
                      muted
                      aria-label={image.url}
                      height='100%'
                    >
                      <source src={image.url} type={image.type} />
                      Sorry, your browser does not support videos.
                    </video>
                  )}
                  {checkIfVideo !== 'mp4' && (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.name}
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  )}
                </>
              )
            })}
          </Carousel>
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              objectPosition='center'
              src={singleCar?.imageUrl}
              alt={singleCar?.carName}
              layout='fill'
              objectFit='contain'
            />
          </div>
        )}
      </div>
      <div className='lg:w-1/2 bg-white lg:absolute right-0 bottom-0 top-0 py-6 px-4'>
        <button
          onClick={() => router.back()}
          className='flex items-center text-sm text-gray-400 hover:text-black transition ease-in-out mt-5 lg:mt-0'
        >
          <BiArrowBack className='mr-2' /> Go back
        </button>
        <Tabs tabs={tabs} openTab={openTab} setOpenTab={setOpenTab} />
        {/* <Paragraph classNames='lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Technical Specifications
        </Paragraph> */}
        {openTab === 1 && (
          <CarInfo>
            <CarInfoChildren header={'Name'} value={singleCar?.carName || ''} />
            <CarInfoChildren
              header={'Country of Origin'}
              value={singleCar?.country || ''}
            />
            <CarInfoChildren header={'City'} value={singleCar?.city || ''} />
            <CarInfoChildren
              header={'Warranty'}
              value={singleCar?.hasWarranty ? 'true' : 'false' || false}
            />
            <CarInfoChildren header={'ID'} value={singleCar?.id || ''} />
            <CarInfoChildren
              header={'Insured'}
              value={singleCar?.insured ? 'true' : 'false' || ''}
            />
            <CarInfoChildren
              header={'Selling Condition'}
              value={singleCar?.sellingCondition || ''}
            />
            <CarInfoChildren
              header={'Owner Type'}
              value={singleCar?.ownerType || ''}
            />
            <CarInfoChildren
              header={'Model'}
              value={singleCar?.model?.name || ''}
            />
            <CarInfoChildren header={'Year'} value={singleCar?.year || ''} />
          </CarInfo>
        )}
        {openTab === 2 && (
          <CarInfo>
            <CarInfoChildren
              header={'Engine type'}
              value={singleCar?.engineType || ''}
            />
            <CarInfoChildren
              header={'fuel type'}
              value={singleCar?.fuelType || ''}
            />
            <CarInfoChildren
              header={'Mileage'}
              value={singleCar?.mileage || ''}
            />
            <CarInfoChildren
              header={'mileage unit'}
              value={singleCar?.mileageUnit || ''}
            />
            <CarInfoChildren
              header={'transmission'}
              value={singleCar?.transmission || ''}
            />
            <CarInfoChildren
              header={'website'}
              value={singleCar?.websiteUrl || ''}
            />
          </CarInfo>
        )}
        {openTab === 3 && (
          <CarInfo>
            <CarInfoChildren
              header={'price'}
              value={`\u20A6${convertCurrency(
                singleCar?.marketplacePrice || 0
              )}`}
            />
            <CarInfoChildren header={'vin'} value={singleCar?.vin || ''} />
            <CarInfoChildren
              header={'body type'}
              value={singleCar?.bodyType?.name || ''}
            />
            <CarInfoChildren
              header={'exterior color'}
              value={singleCar?.exteriorColor || ''}
            />
            <CarInfoChildren
              header={'interior color'}
              value={singleCar?.interiorColor || ''}
            />
            <CarInfoChildren
              header={'featured'}
              value={singleCar?.isFeatured ? 'true' : 'false' || ''}
            />
            <CarInfoChildren header={'vin'} value={singleCar?.vin || ''} />
            <CarInfoChildren
              header={'date posted'}
              value={singleCar?.marketplaceVisibleDate || ''}
            />
          </CarInfo>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Item

export async function getStaticPaths() {
  let cars: any

  await api
    .get(`/inventory/car/search?currentPage=10&pageSize=4000`)
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
    fallback: true 
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
