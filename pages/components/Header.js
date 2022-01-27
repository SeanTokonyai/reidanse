function Header() {
    return (
        <div className='h-full border-b-2'>
            <div className=' text-5xl py-5'>
                Reidanse Accounting<span className='text-blue-600'> & secreterial services</span>
            </div>
        <div className='grid grid-cols-2 bg-gray-900 h-full text-4xl text-white ' >
            <div className='border-x-2 hidden lg:col-span-1 lg:inline border-blue-600 '>
                <img className='object-cover h-full' alt='' src='https://th.bing.com/th/id/R.faded4b6b17e69ffa5b7edd0d57f53d4?rik=LVP9zlrE9Y10yA&riu=http%3a%2f%2fwww.notebookcheck.net%2ffileadmin%2f_processed_%2fcsm_XPS_14_WWAN_option_-_front_and_back_view_c8e75ebf3f.jpg&ehk=k%2fmDIvcE1liLW0qKLZUDG1%2fbRaillR15OknSJFDbsnA%3d&risl=&pid=ImgRaw&r=0' />
            </div>
            <div className='lg:border-x-2 sm:col-span-2 lg:col-span-1 border-blue-600 p-10'>
                <div>
                <p className='py-10'>Welcome to Reidanse Acconunting</p>
                <p className='py-10'>Where we put reliability at our core</p>    
                </div>
                <div>
                    <p className='py-10 text-blue-600'>"Your trustworthyt Partner"</p>
                </div>
                
                
            </div>
        </div>
        </div>
       
    )
}

export default Header
