import Link from 'next/link'
import React from 'react'
import SearchButton from '../components/SearchButton'
import { console } from 'inspector'



const getPosts = async (query: { search?: string }) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`)
    const posts = await res.json()
    return posts.meals
}


export default async function post({ searchParams }: { searchParams: { search?: string } }) {
    const query = await searchParams


    const posts = await getPosts(query)


    return (
        <div>
            <div>
                <SearchButton />
            </div>
            <div className='p-10 grid grid-cols-4 gap-4'>

                {
                    posts?.map((post: { idMeal: string; strMeal: string; strCategory: string; strMealThumb: string }) => (
                        <div className='mt-5 border-2 ' key={post.idMeal}>
                            <h2 className=' font-bold'>{post.strMeal}</h2>
                            <p> {post.strCategory?.slice(0, 100)}</p>
                            <p>{post.idMeal}</p>
                            <img src={post.strMealThumb} alt={post.strMeal} />
                            <Link href={`/posts/${post.idMeal}`} className='text-blue-500 underline'>Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
