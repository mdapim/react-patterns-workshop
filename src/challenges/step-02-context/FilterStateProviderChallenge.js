import React, { useContext } from 'react'
import { DEFAULT_YEAR } from '../../constants'
import { createContext, useState, useMemo } from 'react'

const YearContext = React.createContext()
const UpdateYearContext = React.createContext()

export const FilterStateProviderChallenge = ({ children }) => {
  const [year, setYear] = useState(DEFAULT_YEAR)

  function setCurrentYear(newYear) {
    setYear(newYear)
  }

  return (
    <YearContext.Provider value={year}>
      <UpdateYearContext.Provider value={setCurrentYear}>
        {children}
      </UpdateYearContext.Provider>
    </YearContext.Provider>
  )
}

export const useFilterStateChallenge = () => {
  const getYear = useContext(YearContext)
  const setNewYear = useContext(UpdateYearContext)

  return useMemo(() => {
    return {
      year: getYear,
      setYear: newYear => {
        setNewYear(newYear)
      }
    }
  }, [getYear, setNewYear])
}
