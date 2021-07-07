import React, {useState, useContext, useCallback, createContext} from 'react'
import axios from 'axios'
import {serverData} from '../type/Data'

interface IDataContext {
  data: serverData | undefined,
  server: string,
  setServer: React.Dispatch<React.SetStateAction<string>>,
  loadData: () => void
}

export const DataContext = createContext<IDataContext>({} as IDataContext)

export const useData = () => useContext(DataContext)

export const DataProvider: React.FC = (props) => {
  const [data, setData] = useState<serverData>()
  const [server, setServer] = useState('')
  const loadData = useCallback(() => {
    const fetch = async () => {
      const api = axios.create({
        baseURL: 'http://3.17.143.92/'
      })
      const response = await api.get('/')
      const info = response.data as any
      setData(info)
      setServer(Object.keys(info)[0])
    }
    fetch()
  }, [])
  return (
    <DataContext.Provider value={{data, server, setServer, loadData}}>
      {props.children}
    </DataContext.Provider>
  )
}