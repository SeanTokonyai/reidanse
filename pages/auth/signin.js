import React from 'react'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Nav from '../components/Nav';


function signIn({providers}) {
    return (
       <>
       <Nav />

        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <img src='#' alt='' className='w-80' />
            <p className='text-5xl italic text-blue-600'>
                Reidanse Accounting Inbox
            </p>
            
        <div className='mt-40'>
       {Object.values(providers).map((provider) => (
           <div key={provider.name}>
               <button className='p-3 bg-blue-500 text-white rounded-lg' onClick={() => SignIntoProvider(provider.id ,{callbackUrl:'/'})}>
                   Sign in with {provider.name}
               </button>
           </div>
       ))}
       
       </div>
       
        </div>
       </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        },
    };
}

export default signIn
