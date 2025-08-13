import React from 'react'
import Banner from '../component/Banner'
import Extra from '../component/Extra'
import Card from '../component/Card'
import { useQuery } from '@tanstack/react-query'


const Home = () => {
  const { data: hobbiesData } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3000/hobbies').then((res) =>
        res.json(),
      ),
  })
  console.log(hobbiesData)

  return (
    <div className='p-4'>
      <Banner />
      <h1 className='text-4xl mt-16 font-bold text-indigo-900  dark:text-white text-center '>
        Explore This Hobby
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          hobbiesData?.slice(0, 6).map((data, i) =>
            <Card key={i} data={data} />
          )
        }
      </div>
      <Extra />
    </div>
  )
}
export default Home