import React from 'react'

const Search = () => {
  return (
    <div className="searchBox">
        {/* <label htmlFor="searchBar"> search for coins here </label> <br /> */}
        

        <input type="text"  id='searchBar' placeholder='search for coin or exchanges ...'/>
        <button className='Btn' style={{padding:"1.2% 2%"}}>Get the result</button>

 
    </div>

)
}

export default Search