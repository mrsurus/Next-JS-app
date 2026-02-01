import Image from 'next/image'
import React from 'react'

const getSinglePost = async (id: string) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const posts = await res.json()
    return posts.meals[0]
    }

    export async function generateMetadata({params}: {params: {id: string}}) {
    const {id} = await params
    const post = await getSinglePost( id)
    console.log(post)
    return {
        title: post?.strMeal, 
        description: post?.strInstructions,
    }
}

export  default async function singlePost({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const singlePost = await getSinglePost(id)

  return (
    <div>
        {singlePost?.strMeal}
        <p>{singlePost?.idMeal}</p>
        <Image src={singlePost?.strMealThumb} alt={singlePost?.strMeal} width={300} height={300}/>
    </div>
  )
}
