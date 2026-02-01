import dynamic from 'next/dynamic';
import React from 'react'

export default async function userPage() {
    const res = await fetch('practice-exlevkb8p-mrsurus-projects.vercel.app/api/items');
    const {data} = await res.json();
  return (
    <div className='grid grid-cols-3'>
        {data.map((item: any) => (  
            <div key={item._id} className="user-item" style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.isSeller ? 'Seller' : 'Buyer'}</p>
            </div> 
        
        ))}
        <p>{process.env.NEXT_PUBLIC_NAME}</p>
    </div>
  )
}
