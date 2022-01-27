import { useSession } from "next-auth/react"
import { useRouter } from "next/router"


function Contact() {
    const {data: session} = useSession
    const router = useRouter()
    return (
        <div className='grid grid-cols-2 lg:h-screen bg-gray-900 text-white text-3xl lg:text-5xl'>
            <div className='p-10 col-span-2 lg:col-span-1' >
                <p className='my-7' >What are you waiting  for? </p>
                <p className='my-7'>Click The button below to join
                </p>
                 <p className='my-7' >Reidanse by sending your proposal</p>
                <button onClick={() => router.push('./form')} className='py-7 mt-20 bg-blue-600 px-10 rounded-3xl hover:bg-blue-700'>Join Reidanse</button>
            </div>
            <div className='hidden lg:inline p-5 pt-20'>
                <img onClick={() => router.push('./auth/signin')} src='https://news-cdn.softpedia.com/images/news2/dell-launches-three-new-dell-precision-laptops-powered-by-ubuntu-linux-526237-2.jpg' alt='' className='object-cover w-full h-96 rounded-3xl ml-5 mt-10' />
            </div>
            
        </div>
    )
}

export default Contact
