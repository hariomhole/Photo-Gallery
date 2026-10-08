import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards';


const App = () => {

  const [userData, setData] = useState([]);
  const [page , setpage] = useState(1);

  const GetData = async () => {
    const Response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);

    setData(Response.data);
  }

 

  const PrevChange = () =>{    
    if(page > 1)
    {
    setpage(page-1)
    setData([]); 
    }
  }

  const NextChange = () =>{
    setpage(page+1);
    setData([]);
  }
   useEffect(()=>{
   GetData();
  },[page]);


  let PrintUserData = <h2 className='font-bold text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h2>

  if(userData.length > 0)
  {
    PrintUserData= userData.map(function(ele,idx){

          return <div>

            <Cards ele={ele} idx={idx}/>
          </div>
        })
  }

  return (
    <div className='h-screen p-4 bg-black text-white overflow-auto'>
      <h1  className='font-serif text-center text-6xl'>Photo Gallery</h1>
      <div className='flex flex-wrap gap-4 p-3 min-h-screen mt-4 justify-center'>
      {PrintUserData}  
      </div>

      <div className='flex justify-center items-center mt-5 '>
        <button onClick={PrevChange} style={{opacity:page==1?0.5:1,}} className='px-4 py-2 bg-yellow-400  text-black font-bold text-sm rounded active:scale-95'>Prev</button>
        <button className='m-2  px-3 py-0  text-sm rounded'>Page{page}</button>
        <button onClick={NextChange} className=' px-4 py-2 bg-yellow-400 text-black font-bold rounded text-sm active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
