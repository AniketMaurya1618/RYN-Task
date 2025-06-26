import React from 'react'

function Star({text}) {
    return (
        <div className='flex  items-center gap-2 '>
            <div className=''>
                <img src="../src/assets/Star.png" alt="" />
            </div>
            <div className='text-white '>
                <h1 className='text-4xl'>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default Star
