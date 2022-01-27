import { useRouter } from 'next/router'

function Information() {
  const router = useRouter()
    return (
        <div className='flex flex-col lg:flex-row justify-around lg:h-screen items-center bg-white text-white ' >
            
            <div className="max-w-sm  overflow-hidden rounded-lg shadow-xl shadow-blue-600 bg-gray-900 my-6 transition duration-200 hover:scale-105">
  <img className="w-full h-40 object-cover" src="https://th.bing.com/th/id/R.077b2202e211d1e5fdbf6f260ee46c3c?rik=3MNh4JHqubcB0g&pid=ImgRaw&r=0" alt=""/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Individual Services</div>
    <p className="text-gray-300 text-base">
      No business is too small and every cent counts . Reidanse makes it its pride and joy to manage and grow your finances 
    </p>
  </div>
  <div className=' flex justify-center '><button onClick={() => router.push('./accounting')} className='bg-blue-600 hover:bg-blue-700 px-10 py-5 m-5 rounded-full' >More Information</button></div>
</div>

<div className="max-w-sm my-6 overflow-hidden rounded-lg shadow-xl shadow-blue-600 bg-gray-900 transition duration-200 hover:scale-105">
  <img className="w-full h-40 object-cover" src="https://th.bing.com/th/id/OIP.d-z4KqFcIUey4l6dqcXCaQHaE1?pid=ImgDet&rs=1" alt=""/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Large Scale Services</div>
    <p className="text-gray-300 text-base">
      Behind every successful business person there is a good accountant. Reidanse Provides the best of the best for large cooperations so that your business stays successful.
    </p>
  </div>
  <div className=' flex justify-center '><button onClick={() => router.push('./accounting')} className='bg-blue-600 hover:bg-blue-700 px-10 py-5 m-5 rounded-full' >More Information</button></div>
  
</div>

<div className="max-w-sm my-6 overflow-hidden rounded-lg shadow-xl hover:shaow-2xl shadow-blue-600 bg-gray-900 transition duration-200 hover:scale-105">
  <img className="w-full h-40 object-cover" src="https://th.bing.com/th/id/R.5ebae149415d8b1394a35dae971bb985?rik=9AmZI8VWzKy%2ftQ&pid=ImgRaw&r=0" alt=""/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Financial services</div>
    <p className="text-gray-300 text-base">
      Do you think that your business could perform better? We think so too. At Reidanse we give the best financial advice to ensure growth of your business
    </p>
  </div>
  <div className=' flex justify-center '><button onClick={() => router.push('./accounting')} className='bg-blue-600 hover:bg-blue-700 px-10 py-5 m-5 rounded-full' >More Information</button></div>
</div>


        </div>
    )
}

export default Information
