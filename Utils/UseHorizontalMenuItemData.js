
import React ,  {useEffect ,useState} from 'react' 
const UseHorizontalMenuItemData = (resMenuId) => {
    const[horizonatlMenuInfo, setHorizontalMenuInfo]=useState([]);
    const[horizonatlMenuRestaurantInfo, setHorizontalMenuRestaurantInfo]=useState([]);
    useEffect(()=>{
        fetchData();
        },[])

        const fetchData=async()=>{
          const HorizontalMenuData =await  fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=${resMenuId}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
          const json = await HorizontalMenuData.json();
          setHorizontalMenuInfo(json?.data?.cards)
        
          setHorizontalMenuRestaurantInfo(json?.data?.cards.slice(3))
          
          
         
        }

        return [horizonatlMenuInfo,horizonatlMenuRestaurantInfo]
  
}

export default UseHorizontalMenuItemData
