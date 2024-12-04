import React from 'react'

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between dark:text-black text-gray-500">
        <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        >
        Prev
        </button>
        <div className="flex items-center gap-2 text-sm dark:text-gray-300">
            <button className='px-2 rounded-sm bg-lamaSky dark:bg-blue-400'>1</button>
            <button className='px-2 rounded-sm '>2</button>
            ...
            <button className='px-2 rounded-sm '>10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
        Next
        </button>

    </div>
  )
}

export default Pagination