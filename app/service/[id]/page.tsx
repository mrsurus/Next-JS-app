import { promises } from 'dns';
import React from 'react'
type Props = {
    params: Promise<{
        id: string
    }>
}
const service = [
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

export default async function serviceDetailsPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params
  const selectedService = service.find(d => d._id === id)

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Service Details</h1>
      {selectedService ? (
        <div>
          <p><span className='font-semibold'>Name:</span> {selectedService.name}</p>
          <p><span className='font-semibold'>Email:</span> {selectedService.email}</p>
          <p><span className='font-semibold'>Phone:</span> {selectedService.phone}</p>
          <p><span className='font-semibold'>Age:</span> {selectedService.age}</p>
          <p><span className='font-semibold'>Gender:</span> {selectedService.gender}</p>
          <p><span className='font-semibold'>City:</span> {selectedService.city}</p>
          <p><span className='font-semibold'>Profession:</span> {selectedService.profession}</p>
        </div>
      ) : (
        <div>No service found with ID: {id}</div>
      )}
    </div>
  )
}
