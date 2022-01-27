import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

function Nav({ highlightHome, highlightAccounting, highlightInbox }) {
    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div className='text-lg flex justify-between h-16 bg-gray-900 text-white shadow-md'>
            <div className='px-5'><img className='h-16 object-contain rounded-3xl' src="/reidanse_logo.bmp" alt=""/></div>
            <div className='flex h-16 items-center'>
                {session?.user?.email==='shonsox@gmail.com'?(<div onClick={() => router.push('./inbox')} className={` ${highlightInbox?('bg-blue-500'):('')} mx-1 px-3 flex items-center h-8 rounded-full hover:bg-blue-600 cursor-pointer transition ease-in duration-200`}>Inbox</div>):(<div></div>)}
                
                <div onClick={() => router.push('/')} className={`px-3 ${highlightHome?('bg-blue-500'):('')} mx-1 flex items-center h-8 rounded-full hover:bg-blue-600 cursor-pointer transition ease-in duration-200`} >Home</div>
                <div onClick={() => router.push('./accounting')} className={`px-3 ${highlightAccounting?('bg-blue-500'):('')} mx-1 flex items-center h-8 rounded-full  hover:bg-blue-600 cursor-pointer transition ease-in duration-200`}>Accounting Services</div>
                <hr className='text-white' />
            </div>
        </div>
    )
}

export default Nav
