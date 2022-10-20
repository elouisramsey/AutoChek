import Button from 'components/button/Button'
import { Paragraph } from 'components/DisplayText/DsiplayText'
import React from 'react'

type Props = {
  colSpan?: any
  count: number
  renderedCount: number
  rowsPerPage: number
  onChangePage: (val: any) => void
  page: number
}

function Pagination({
  count,
  renderedCount,
  rowsPerPage,
  onChangePage,
  page
}: Props) {
  const totalPages = Math.ceil(count / rowsPerPage)
  const firstIndex = page * rowsPerPage - rowsPerPage + 1
console.log(firstIndex)
  const handleBackButtonClick = () => {
    onChangePage && onChangePage(page - 1)
  }

  const handleNextButtonClick = () => {
    onChangePage && onChangePage(page + 1)
  }

  return (
    <div className='flex justify-center items-baseline'>
      <Button variant='end' onClick={() => onChangePage(1)}>
        &#8676;
      </Button>
      <Spacer />
      <Button onClick={handleBackButtonClick}>&larr; Previous</Button>
      <Spacer />
      <div className='flex flex-row'>
        <Paragraph>Page {page}</Paragraph>
        <Paragraph>&nbsp; | &nbsp;</Paragraph>
        <Paragraph classNames='text-gray-600'>
          {firstIndex} - {Math.min(firstIndex + renderedCount - 1, count)} of {' '}
          {count}
        </Paragraph>
      </div>
      <Spacer />
      <Button onClick={handleNextButtonClick}> Next &rarr;</Button>
      <Spacer />
      <Button variant='end' onClick={() => onChangePage(totalPages)}>
        &#8677;
      </Button>
    </div>
  )
}

export default Pagination

const Spacer = () => {
    return (
        <div className="mx-3" />
    )
}
