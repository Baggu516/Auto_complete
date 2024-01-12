import React, { useEffect ,useState} from 'react'
const arr=["apple","banana","mango","straberry","graphs"]
const Search = () => {
    const [text,setText]=useState("")
    const [filterArr,setFilterArr]=useState([])
    useEffect(()=>{
        let t=arr.filter((item)=>item.toLowerCase().includes(text.toLowerCase()))
        setFilterArr([...t])
    },[text])
  return (
    <div>
        <h1>
            Search items
        </h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        {filterArr&&filterArr.map((item,i)=>(
            <li key={i}>{item}</li>
        ))}
    </div>
  )
}

export default Search