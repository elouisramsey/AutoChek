import React from 'react'

type TabsProps = {
    name: string
    id: number
}

type Props = {
  openTab: number
  setOpenTab: (val: number) => void
  tabs: TabsProps[]
}

function Tabs({ openTab, setOpenTab, tabs }: Props) {
  return (
    <ul
      className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
      role='tablist'
    >
      {tabs.map((tab) => (
        <li className='-mb-px mr-2 last:mr-0 flex-auto text-center flex items-center flex-col' key={tab.id}>
          <a
            className={
              'text-xs font-bold uppercase px-5 py-3 block leading-normal font-AvenirBlack ' +
              (openTab === tab.id
                ? 'text-secondary'
                : 'text-gray-400')
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab(tab.id)
            }}
            data-toggle='tab'
            href='#link1'
            role='tablist'
          >
            <i className='fas fa-space-shuttle text-base mr-1'></i> {tab.name}
          </a>
          <div
            className={`border-b w-1/4 border-solid  ${
              openTab === tab.id ? 'border-primary' : ' border-none'
            }`}
          />
        </li>
      ))}
    </ul>
  )
}

export default Tabs