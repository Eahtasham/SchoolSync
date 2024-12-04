import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { classesData, role } from '@/lib/data';
import React from 'react'
import Link from "next/link";
import { Pencil , ArrowDownWideNarrow, Search, Filter, Trash2 } from 'lucide-react';

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};
const columns = [
  {
    header: "Class Name",
    accessor: "name"
  },
  {
    header: "Capacity",
    accessor: "capacity"
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden lg:table-cell"
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
  }
];


const ParentList = () => {

  const renderRow = (item: Class) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm
         hover:bg-lamaPurpleLight 
          dark:bg-stone-800 dark:even:bg-stone-900 dark:hover:bg-gray-700
          dark:border-slate-600">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td>{item.capacity}</td>
      <td className="hidden lg:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky dark:bg-sky-300">
              {/* <Image src="/assets/edit.png" alt="" width={16} height={16} className='dark:bg-sky-300' /> */}
              <Pencil size={20} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple dark:bg-purple-300">
              {/* <Image src="/assets/delete.png" alt="" width={16} height={16} /> */}
              <Trash2 />
            </button>
          )}
        </div>
      </td>
    </tr>
  )



  return (
    <div className='bg-white dark:bg-stone-800 p-4 rounded-xl flex-1'>
      {/* TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
        <div className='flex md:flex-row items-cener gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-gray-900 bg-lamaYellow" >
              {/* <Image src='/assets/filter.png' alt="filter button" width={14} height={14} /> */}
              <Filter />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-gray-900 bg-lamaYellow" >
              {/* <Image src='/assets/sort.png' alt="filter button" width={14} height={14} /> */}
              <ArrowDownWideNarrow />
            </button>
            {role === 'admin' && <button className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-gray-900 bg-lamaYellow" >
              {/* <Image src='/assets/plus.png' alt="filter button" width={14} height={14} /> */}
              <Search />
            </button>}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className=''>
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>
      {/* PAGINATION */}
      <Pagination />

    </div>
  )
}

export default ParentList







