import React from 'react'

const ModelHeader = () => {
  return (
    <div className=''>
    <div className='flex justify-between'>
        <label>
        <select id="countries" className='border-white ml-2 w-8'>
            <option selected></option>
            <option value="US">Model_1</option>
            <option value="CA">Model_2</option>
            <option value="FR">Model_3</option>
            <option value="DE">Model_4</option>
        </select>
         Models
        </label>
        
        <a classname='' src=''>View All Models</a>
    </div>
    <div className='flex border-b border-black pb-2'>
        <div className='w-2/6'>
            <h2>Name</h2>
        </div>
        <div className='w-2/6'>
            <h2>Workspace</h2>
        </div>
        <div className='w-1/6'>
            <h2>Status</h2>
        </div>
        <div className='w-1/6'>
            <h2>Last Visited</h2>
        </div>
    </div>
    </div>
  )
}

export default ModelHeader