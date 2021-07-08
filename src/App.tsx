import React, {useEffect, memo} from 'react'
import Skeleton from 'react-loading-skeleton'
import {useData} from './hooks/DataProvider'
import Row from './components/Row/Row'
import './styles.css'

const App: React.FC = () => {
  const {data, setData, loadData, server, setServer} = useData()
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <header id="selectDiv">
        <h1>Gold Sellers</h1>
        {data != undefined && (
          <select onChange={(e) => {setServer(e.target.value)}}>
            {
              Object.keys(data).map((v, key) => {
                return (<option key={key} value={v}>{v.replace('-', ' ')}</option>)
              })
            }
          </select>
        )}
        {data == undefined && (
          <Skeleton width={450} height={40} style={{marginBottom: -10}} />
        )}
      </header>
      <main>
        <div className="content">
          <div className="controls">
            <input type="search" placeholder="Filtar itens" />
            <button onClick={() => {
              setData(undefined)
              loadData()
            }}>Recarregar dados</button>
          </div>
          {(data != undefined && data[server] != undefined) && (
            <>
              {
                Object.keys(data[server]).map((value, key) => {
                  const datas = data[server][value]
                  return <Row key={key} item={value} {...datas} />
                })
              }
            </>
          )}
          {(data == undefined) && (
            <>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
              <Skeleton height={120} style={{marginTop: 20, marginBottom: 20}}/>
            </>
          )}
        </div>
      </main>
      <footer>
        <h3>Copyright © 2021 Lucas Gomes Softwares</h3>
      </footer>
    </>
  )
}

export default memo(App)