import React, {useEffect, memo} from 'react'
import Skeleton from 'react-loading-skeleton'
import {useData} from './hooks/DataProvider'
import Row from './components/Row/Row'
import './styles.css'

const App: React.FC = () => {
  const {data, loadData, server, setServer} = useData()
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <header id="selectDiv">
        <h1>Gold Sellers</h1>
        {data != undefined && (
          <div>
            <select onChange={(e) => {setServer(e.target.value)}}>
              {
                Object.keys(data).map((v, key) => {
                  return (<option key={key} value={v}>{v.replace('-', ' ')}</option>)
                })
              }
            </select>
          </div>
        )}
        {data == undefined && (
          <Skeleton width={450} height={40} style={{marginBottom: -10}} />
        )}
      </header>
      <main>
        {(data != undefined && data[server] != undefined) && (
          <>
            {
              Object.keys(data[server]).map((value, key) => {
                const datas = data[server][value]
                return <Row key={key} item={value} {...datas}/>
              })
            }
          </>
        )}
        {(data == undefined) && (
          <>
            <div className="loading-row">
              <div className="loading-header">
                <Skeleton width={250} height={42} />
              </div>
              <div className="loading-body">
                <Skeleton width={390} height={120} />
                <Skeleton width={390} height={120} />
                <Skeleton width={390} height={120} />
              </div>
            </div>
          </>
        )}
        <footer style={{marginBottom: 50}} />
      </main>
    </>
  )
}

export default memo(App)