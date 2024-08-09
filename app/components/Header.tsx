import React from 'react'

const Header = () => {
  return (

    <div className="space-y-4">
        {/* title */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold">
            Discover the weather in your city
        </h1>
        {/* slug */}
        <h3 className="tetx-base sm:text-xl md:text-2xl font-normal">
            The easiest way to find weather forecast information online
        </h3>
    </div>

  )
}

export default Header