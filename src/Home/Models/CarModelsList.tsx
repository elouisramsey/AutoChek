import Arrow from 'components/Arrow/Arrow'
import { Paragraph } from 'components/DisplayText/DsiplayText'
import React from 'react'
import SingleCarModelItem from './SingleCarModelItem'
import { CarProps } from '../types'
import Layout from 'Home/shared/Layout'

type Props = {
  carsModelList: CarProps[]
}

function CarModelsList({ carsModelList }: Props) {
  return (
    <Layout
      text='See more brands'
      to='/car-brands'
      subtitle='  Introducing the Different Brands we have'
      title='Collection of the best brands from all over the world'
    >
      {carsModelList.map((model: CarProps) => (
        <SingleCarModelItem
        key={model.id}
          name={model.name}
          id={model.id}
          imageUrl={model.imageUrl}
        />
      ))}
    </Layout>
  )
}

export default CarModelsList
