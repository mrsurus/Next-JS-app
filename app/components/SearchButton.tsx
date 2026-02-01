'use client'
import { usePathname, useRouter } from 'next/navigation'
import path from 'path'
import React, { useEffect, useState } from 'react'

export default function SearchButton() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
  const abc = { search}
  const urlSearchQuery = new URLSearchParams(abc).toString()
  const newPathname = `${pathname}?${urlSearchQuery}`
  router.push(newPathname)
  }, [search])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', search)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Enter search term..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        Search
      </button>
    </form>
  )
}
