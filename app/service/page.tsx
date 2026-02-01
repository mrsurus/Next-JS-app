import Link from 'next/link'
import React from 'react'
const services = [
  {
    "_id": "1",
    "name": "Rahim Uddin",
    "email": "rahim.uddin@example.com",
    "phone": "01712345678",
    "age": 28,
    "gender": "Male",
    "city": "Dhaka",
    "profession": "Web Developer"
  },
  {
    "_id": "2",
    "name": "Karima Akter",
    "email": "karima.akter@example.com",
    "phone": "01823456789",
    "age": 25,
    "gender": "Female",
    "city": "Chittagong",
    "profession": "Graphic Designer"
  },
  {
    "_id": "3",
    "name": "Hasan Mahmud",
    "email": "hasan.mahmud@example.com",
    "phone": "01934567890",
    "age": 32,
    "gender": "Male",
    "city": "Rajshahi",
    "profession": "School Teacher"
  },
  {
    "_id": "4",
    "name": "Nusrat Jahan",
    "email": "nusrat.jahan@example.com",
    "phone": "01645678901",
    "age": 27,
    "gender": "Female",
    "city": "Khulna",
    "profession": "Content Writer"
  },
  {
    "_id": "5",
    "name": "Sabbir Ahmed",
    "email": "sabbir.ahmed@example.com",
    "phone": "01556789012",
    "age": 30,
    "gender": "Male",
    "city": "Sylhet",
    "profession": "Digital Marketer"
  },
  {
    "_id": "6",
    "name": "Farzana Rahman",
    "email": "farzana.rahman@example.com",
    "phone": "01767890123",
    "age": 24,
    "gender": "Female",
    "city": "Barisal",
    "profession": "University Student"
  },
  {
    "_id": "7",
    "name": "Imran Hossain",
    "email": "imran.hossain@example.com",
    "phone": "01878901234",
    "age": 35,
    "gender": "Male",
    "city": "Mymensingh",
    "profession": "Business Owner"
  },
  {
    "_id": "8",
    "name": "Tania Sultana",
    "email": "tania.sultana@example.com",
    "phone": "01989012345",
    "age": 26,
    "gender": "Female",
    "city": "Cumilla",
    "profession": "HR Executive"
  },
  {
    "_id": "9",
    "name": "Arif Khan",
    "email": "arif.khan@example.com",
    "phone": "01690123456",
    "age": 29,
    "gender": "Male",
    "city": "Gazipur",
    "profession": "Mobile App Developer"
  },
  {
    "_id": "10",
    "name": "Mitu Chowdhury",
    "email": "mitu.chowdhury@example.com",
    "phone": "01501234567",
    "age": 31,
    "gender": "Female",
    "city": "Narayanganj",
    "profession": "Bank Officer"
  }
]

export default function page() {
  return (
    <div className=' flex gap-4 flex-wrap mt-10'>
      {
        services.map(service => 
        <Link key={service._id} href={`/service/${service._id}`} className=' p-4 border rounded-md shadow-md w-60 hover:bg-gray-100 transition'>
          <h2 className=' font-bold text-lg mb-2'>{service.name}</h2>
          <p><span className=' font-semibold'>Email:</span> {service.email}</p>
          <p><span className=' font-semibold'>Phone:</span> {service.phone}</p>
          <p><span className=' font-semibold'>Profession:</span> {service.profession}</p>
        </Link>
        )
      }
    </div>
  )}