import React ,{ useState } from 'react'
import Sresult from './Sresult';
const Search = () => {
  const  [img, setImg] = useState("");
  const inputEvent= (e) =>{
const data = e.target.value;
console.log(data);
setImg(data);
  }
  return (
<>
<div className='searchbar'>

<h2>Search here</h2>
<input  
type="text"
 placeholder='search anything'
 value={img}
onChange={inputEvent }
/>
{img === ''? null : <Sresult image={img}/>}
</div>

</>
 )
}

export default Search;