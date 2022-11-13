import React from 'react'

const SingleChar=({ id,title, characters, image, })=> {


   
          
return (
                             
<div className="grid grid-row-2 w-10/12 mx-auto mb-5 md:w-44 md:gap-4">
 <div>
<img src={image} alt={title} />
</div>
        <div className=" text-center text-white font-sans mt-2"><h4>{title}</h4></div>
    </div>
                            
                        )
                    
         
       
         
       
  
}

export default SingleChar