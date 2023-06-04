import React from 'react'
import DataContext from './DataContext'

// This will act as our centralized component where we will keep everything or every info related to our webpage;
// children: is a prop which will become that component on which this component (ContextProvider) wraps.
export default function ContextProvider({children}) {
  return (
    <DataContext.Provider>
        {children}
    </DataContext.Provider>
  )
}
