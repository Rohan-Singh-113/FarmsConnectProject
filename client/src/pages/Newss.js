import React , { useEffect , useState } from 'react'
import axios from 'axios'
import News from '../component/News'

const Newss = () => {

    const [data , setData] = useState([]);

    useEffect(async()=>{
        const res = await axios.get('https://newsapi.org/v2/everything?q=agriculture+farming+Uttar&sortBy=popularity&apiKey=8d8f5aec9dee49608b5c064b488df4cd')
        setData(res.data.articles);
        console.log(res.data.articles);
    },[])


    return (
        <> 
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-8"  >
            {data.map((value , idx)=>(
                <News key = {idx} url = {value.url} image = {!value.urlToImage ? "https://cricketaddictor.com/wp-content/uploads/2022/01/images-64.jpeg": value.urlToImage} title =  {value.title ? value.title.slice(0, 45) : ""} author = {value.author} description =  {value.description ? value.description.slice(0, 88) : ""} sourceName = {value.source.name}/>
            ))}
        </div>
        {/* {value.title} */}
        {/* {value.description} */}
        
        </>
    )
}

export default Newss
