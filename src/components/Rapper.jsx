import React, { createContext } from 'react'

export const DataContext=createContext();

const Rapper = ({children}) => {
    const users=["Inshal","Shweta","Mahi","Ashfaq","Daksh"]
    console.log({children});

  return (
    <div>
        <DataContext>
            {children}
        </DataContext>
    </div>
    
  )
}

export default Rapper