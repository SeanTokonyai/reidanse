import { addDoc, collection,  serverTimestamp } from '@firebase/firestore';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { db } from '../firebase';

function form() {
    const {data:session} = useSession()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const sendProposal = async (e) => {
        e.preventDefault();
        const nameToSend = name;
        const emailToSend = email;
        const messageToSend = message;
        setName('');
        setEmail('');
        setMessage('');

        



        await addDoc(collection(db,'proposals', 'Reidanse','message'), {
            name: nameToSend,
            email: emailToSend,
            message: messageToSend,
            timestamp: serverTimestamp(),
            open:false,
        })
        alert('Thank You for sending your Proposal. We will reply shortly.')
    }

    return (
        <div className=''>
            <div className='bg-gray-900 py-10 px-12 rounded-3xl mt-10 mx-10'>

              <div className='flex items-center mb-10'>
                <span className='text-blue-600'>Name: </span>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full mx-5 px-5 rounded-full py-4 ' type='text' placeholder='name...' />
            </div>
            <div className='flex items-center my-10'><span className='text-blue-600'>Email:</span>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full mx-5 px-5 rounded-full py-4 ' type='text'placeholder='email...' />
            </div>
            <div className=''>
                <div className='text-blue-600 mb-5'>Message:</div>
                <div className='pr-8 pl-16'>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='w-full h-48 px-5 rounded-3xl py-4 ' type='text' placeholder='message...' />    
                </div>
                
            </div> 
            <div className='justify-center'><button onClick={sendProposal} className='bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-5 px-10 rounded-full my-3 mx-16' type='submit'>Submit</button></div>
             
            </div>
            
        </div>
    )
}

export default form
