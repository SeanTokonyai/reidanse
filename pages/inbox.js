import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query,doc ,updateDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { useSession } from "next-auth/react";
import Nav from "./components/Nav";
import moment from 'react-moment'
import Moment from "react-moment";

function inbox() {
    const [selected,setSelected] = useState([])
    const [proposals,setProposals] = useState([])
    const {data:session} = useSession()
    
    console.log(selected.open)
    useEffect(() => onSnapshot(query(collection(db,'proposals', 'Reidanse','message'), orderBy('timestamp','desc')),(snapshot) => setProposals(snapshot.docs)))
    const updateOpen = async(e) =>{
        const washingtonRef = doc(db,'proposals', 'Reidanse','message');

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  open: true
});

    }
    return (
       <div className='h-screen overflow-hidden'>
           <Nav highlightInbox={true} />
           {session.user.email==='shonsox@gmail.com'?(<div className="bg-gray-900 mx-20 h-full grid grid-cols-3 pb-20">
              
               <div className=' col-span-1 border-blue-600  h-full border-2  overflow-y-scroll'>
                   <p className='text-4xl  my-5 border-b-2 border-blue-600 mx-5 text-blue-900'>Clients</p>
                {proposals.map((proposal) =>(
                    <div onClick={() => {setSelected(proposal.data())
                    updateOpen}} className={`${selected.name===proposal.data().name?('bg-gray-800'):('')} cursor-pointer hover:bg-gray-800 text-2xl text-blue-600 border-b-2 py-7 border-blue-600 mx-5  px-5`}>
                        
                        {proposal.data().name}
                    </div>
                ))}
               </div>
               <div className='col-span-2 border-blue-600  h-full border-2'>
                        <div className='bg-white text-black h-full p-5  rounded-3xl'>
                            <p className='text-lg font-serif font-bold'>Name: {selected.name}</p>
                            <p className='text-lg font-serif font-bold'>Email: {selected.email}</p>
                            <p className='text-lg font-serif font-bold'>Time: </p>
                            <p className='text-lg font-serif font-bold'>Message:</p>
                            
                            <p>{selected.message}</p>
                        </div>
               </div>
           </div>):(<div></div>)}
           
       </div>
    )
}

export default inbox
