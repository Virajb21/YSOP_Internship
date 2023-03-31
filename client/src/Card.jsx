import React from 'react';
const Card = ({wdata,query}) => {

return (
    <div className='flex flex-col gap-4 max-w-md mx-auto shadow-md mt-12 p-8'>
        {console.log(wdata)}
       <img src={`http://openweathermap.org/img/wn/${wdata.icon}@2x.png`}></img>
       <div>
        <h3>{`Weather: ${wdata?.weather_description}`}</h3>
            <p>{`The Temperature at ${query} is = ${wdata?.temp_max} and it feels like it is ${wdata?.feels_like}`}</p>
        </div>
       <button className='primary'>Learn More about this place</button>
    </div>
)
}

export default Card;