import React from 'react';

export default function Home() {
  return (
   
   <div className="home">
    <div className="home-content1 container mx-auto">
    <h1 className=" border-b-2  border-hexleap dark:text-white text-2xl font-bold w-20">
      Sports
    </h1>
    
    <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mt-3">
      {/* BOX ONE */}
      <div className="one bg-white dark:bg-slate-900  p-3 shadow-md">
      <img src="/images/image1.png" alt="Image 1" className='mx-auto' />
        <h3 className='my-2 font-semibold dark:text-white'>Sacramento River Cats</h3>
        <div className="event bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md flex justify-between">
          <div className="total ">
            <p className='text-gray-400 text-sm'>Total Event</p>
            <h3 className='fontmedium dark:text-white'>48 Events</h3>
          </div>
          <div className="sport">
          <p className='text-gray-400 text-sm'>Sport</p>
            <h3 className='fontmedium dark:text-white'>Baseball</h3>
          </div>
        </div>
      </div>
      {/* TWO */}
      <div className="one bg-white  dark:bg-slate-900 p-3 shadow-md">
      <img src="/images/image2.png" alt="Image 1" className='mx-auto' />
        <h3 className='my-2 font-semibold'>Las Vegas Aviators</h3>
        <div className="event bg-gray-100 px-2 py-1 rounded-md flex justify-between">
          <div className="total ">
            <p className='text-gray-400 text-sm'>Total Event</p>
            <h3 className='fontmedium'>28 Events</h3>
          </div>
          <div className="sport">
          <p className='text-gray-400 text-sm'>Sport</p>
            <h3 className='fontmedium'>Baseball</h3>
          </div>
        </div>
      </div>
      {/* THREE */}
      <div className="one bg-white  dark:bg-slate-900  p-3 shadow-md">
      <img src="/images/image3.png" alt="Image 1" className='mx-auto' />
        <h3 className='my-2 font-semibold'>New Jersey Devils</h3>
        <div className="event bg-gray-100 px-2 py-1 rounded-md flex justify-between">
          <div className="total ">
            <p className='text-gray-400 text-sm'>Total Event</p>
            <h3 className='fontmedium'>15 Events</h3>
          </div>
          <div className="sport">
          <p className='text-gray-400 text-sm'>Sport</p>
            <h3 className='fontmedium'>Ice Hockey</h3>
          </div>
        </div>
      </div>
      {/* FOUR */}
      <div className="one bg-white  dark:bg-slate-900  p-3 shadow-md">
      <img src="/images/image2.png" alt="Image 1" className='mx-auto' />
        <h3 className='my-2 font-semibold'>Las Vegas Aviators</h3>
        <div className="event bg-gray-100 px-2 py-1 rounded-md flex justify-between">
          <div className="total ">
            <p className='text-gray-400 text-sm'>Total Event</p>
            <h3 className='fontmedium'>28 Events</h3>
          </div>
          <div className="sport">
          <p className='text-gray-400 text-sm'>Sport</p>
            <h3 className='fontmedium'>Baseball</h3>
          </div>
        </div>
      </div>
      {/* FIVE */}
      <div className="one bg-white  dark:bg-slate-900  p-3 shadow-md">
      <img src="/images/image4.png" alt="Image 1" className='mx-auto' />
        <h3 className='my-2 font-semibold'>Las Vegas Aviators</h3>
        <div className="advertisement py-3">
          <h2 className='font-semibold'>Advertisement title</h2>
          <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia quisquam odio culpa eveniet molestiae. Officiis soluta odit aperiam corporis, obcaecati repudiandae, blanditiis facere corrupti pariatur quae asperiores! Esse, tempore.</p>
        </div>
      </div>

    </div>
   <div className="but flex items-center justify-center">
   <button className='p-3 px-6 rounded bg-blue-600 hover:bg-blue-700 text-light my-6 text-white '>See more</button>
   </div>
    </div>
    <div className="home-content2 container mx-auto">
        <h2 className='text-center text-3xl font-bold mb-2 '>Collection Spotlight</h2>
        <p className='text-center font-medium'>Discover extraordinary moment with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable <br />
        experience.Grabs yours today!</p>
        <div className="cardss container mx-auto  flex items-center justify-center">
        <div className="cards flex mt-7 gap-11  ">
          <div className="vector1 w-28   flex items-center justify-center">
            <img src="/images/vector.png" className='p-2 border-2 border-hexleap' alt="" />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-11  ">
           <div className="content-1 bg-white shadow-md w-64">
           <div  className="card-one h-96 w-64 ">
              <img  src="/images/image5.png"  height={'100%'}  className='w-100' alt="" />
            </div>
            <div className="small-card w-62  px-6 items-center flex flex-col gap-2 justify-center pb-3">
              <h3 className=' text-md font-bold'>Las Vegas Aviator</h3>
              <div className="divide-x-2 font-medium divide-black flex gap-2">
                  <p>OCT 15</p>
                  <p>SUN</p>
                  <p>4:30 PM</p>
              </div>
              <p className='text-gray-400 text-sm text-center'>Las Vagas Ballpark,Las Vegas, <br />Nevada</p>
              <button className='px-6 py-3 bg-black hover:bg-slate-900 text-white text-sm'>Take Flight Collection</button>
            </div>
           </div>
           <div className="content-2 bg-white shadow-md w-64">
           <div  className="card-one h-96 w-64 ">
              <img  src="/images/image6.png"  height={'100%'}  className='w-100' alt="" />
            </div>
            <div className="small-card w-62  px-6 items-center flex flex-col gap-2 justify-center pb-3">
              <h3 className=' text-md font-bold'>Sacramento River Cats</h3>
              <div className="divide-x-2 font-medium divide-black flex gap-2">
                  <p>OCT 15</p>
                  <p>SUN</p>
                  <p>4:30 PM</p>
              </div>
              <p className='text-gray-400 text-sm text-center'>Sutter Health Park,Sacramento <br />California</p>
              <button className='px-6 py-3 bg-black hover:bg-slate-900 text-white text-sm'>Orange Collection</button>
            </div>
           </div>
           <div className="content-3 bg-white shadow-md w-64">
           <div  className="card-one h-96 w-64 ">
              <img  src="/images/image5.png"  height={'100%'}  className='w-100' alt="" />
            </div>
            <div className="small-card w-62  px-6 items-center flex flex-col gap-2 justify-center pb-3">
              <h3 className=' text-md font-bold'>Las Vegas Aviator</h3>
              <div className="divide-x-2 font-medium divide-black flex gap-2">
                  <p>OCT 15</p>
                  <p>SUN</p>
                  <p>4:30 PM</p>
              </div>
              <p className='text-gray-400 text-sm text-center'>Las Vagas Ballpark,Las Vegas, <br />Nevada</p>
              <button className='px-6 py-3 bg-black hover:bg-slate-900 text-white text-sm'>Take Flight Collection</button>
            </div>
           </div>
          
            
            
          </div>
          <div className="vector1 w-28    flex items-center justify-center">
            <img src="/images/vector (1).png" className='p-2 border-2 border-hexleap' alt="" />
          </div>
        </div>
        </div>
    </div>
   </div>
  );
}
