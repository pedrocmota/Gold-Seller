import React from 'react'
import './styles.css'

interface IRow {
  item: string,
  menorPreco: string,
  precoMercado: string,
  quantidade: number
}

const Row: React.FunctionComponent<IRow> = (props) => {
  return (
    <div className="row">
      <div className="header">
        <h3>{props.item}</h3>
      </div>
      <div className="body">
        <div className="body-children">
          <h2>Preço atual:</h2>
          <div>{props.menorPreco}</div>
        </div>
        <div className="body-children">
          <h2>Preço médio:</h2>
          <div>{props.precoMercado}</div>
        </div>
      </div>
      <div className="footer">
        <h2>Quantidade: <b>{props.quantidade}</b></h2>
      </div>
    </div>
  )
}

export default Row