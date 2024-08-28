

 

const Shimmer = () => {
  
  const divs = Array(12).fill(null); // Create an array with 8 undefined elements
  return (

    <div className="mt-10 mb-4 mx-10" >
    <div className="md:text-2xl text-xl font-bold ml-4">
          What's on your mind?
        </div>
        <div className="flex overflow-hidden p-4 mt-10 mx-2 mb-4 w-full max-w-full">
      <div className="flex flex-nowrap gap-4 "> {/* Ensures children don't wrap */}
        {divs.map(( index) => (
          <div
            key={index}
            className="bg-[#E9ECEA] h-28 w-28 rounded-full flex-shrink-0" // Prevents shrinking
          ></div>
        ))}
      </div>
    </div>
        
      <hr  className="bg-[#E9ECEA]"/>
      <div className="flex gap-4 p-4 m-4 flex-wrap">
      {divs.map((index) => (
        <div key={index}>
        <div className="bg-[#E9ECEA] h-[182px] w-[263px] rounded-lg"></div>
     
      </div>
      ))}
     
      </div>
          
          
        </div>
  )
}
  

export default Shimmer;
