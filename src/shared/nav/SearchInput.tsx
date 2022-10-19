import Button from 'components/button/Button'
import React, { useState } from 'react'

type Props = {}

const SearchInput = (props: Props) => {
  const [searchString, setSearchString] = useState<string>('')

  const submit = () => {}

  return (
    <form className='flex flex-row w-2/4 justify-between items-center'>
      <label htmlFor='search' className='sr-only' />
      <input
        onChange={(e) => setSearchString(e.target.value)}
        type='text'
        id='search'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5'
        placeholder='Search different models...'
        required
      />
      <span className='px-4' />
      <Button onClick={submit}>Search</Button>
    </form>
  )
}

export default SearchInput
