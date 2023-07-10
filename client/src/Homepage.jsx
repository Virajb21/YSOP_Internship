import React,{useState} from 'react';
import axios from 'axios';
import Card from './Card';
const Homepage = () => {
  const [query,setQuery] = useState('');
  const [wdata,setWdata] = useState({});
  const [result,setResult] = useState({});
  const update = async(query) => {
       try {
          let response = await axios.post('http://localhost:8000/geolocation',query);   
          return response.data;
       } catch(err){
             console.log("this is the error is: ",err);
       }
  }
  const uploadData = async(weather) => {
       try {
            let response = await axios.post('http://localhost:8000/upload-data',weather);
            return response;
       } catch(err) {
            console.log(err);
       }
  }
  const retriveData = async() => {
    try {
        let response = await axios.post('http://localhost:8000/retrieve-data',query);
        return response;
    } catch(err) {
        console.log(err);
    }
  }
  const handleSubmit = () => {
      update(query).then((response) => {
          let weather = response.data
          uploadData(weather).then((response) => {
                setWdata(response.data.weather_data);
                retriveData(query).then((response) => {
                    setResult(response.data[0]);
                    console.log(response);
                    console.log(result);
                })
          })
        
      })
  }
  return (
    <div className='mt-4'>
    <div className='max-w-md mx-auto'>
     <div className='flex'>
         <input type='search' value={query} placeholder="Enter the city name" className='w-full border rounded-2xl mx-2 py-2 px-3' onChange={e => setQuery(e.target.value)}/>
         <button onClick={handleSubmit}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>
         </button>
     </div>
    </div>
    
    {wdata!={} ? <Card wdata={wdata} query={query}/> : 'Loading...'}

    </div>
  )
}

export default Homepage