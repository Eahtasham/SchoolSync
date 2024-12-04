import React from 'react'
import Image from 'next/image';

const TableSearch = () => {
  return (
    <div className="w-full px-2 md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 dark:ring-gray-500">
        <Image src='/assets/search.png' alt="search button" width={14} height={14} />
        <input 
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-transparent outline-none"
        />
    </div>
  )
}

export default TableSearch