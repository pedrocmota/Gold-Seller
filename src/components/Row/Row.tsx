import React from 'react'

interface IRow {
  item: string,
  menorPreco: string,
  precoMercado: string,
  quantidade: number
}

const Row: React.FunctionComponent<IRow> = (props) => {
  return (
    <div className="row">
      <div className="titleDiv">
        <h1>{props.item}</h1>
      </div>
      <div className="rowBoxes">
        <div className="box">
          <h2>Menor Preço:</h2>
          <b>{props.menorPreco}g</b>
        </div>
        <div className="box">
          <h2>Preço Mercado: </h2>
          <b>{props.precoMercado}g</b>
        </div>
        <div className="box">
          <h2>Quantidade: </h2>
          <b>{props.quantidade} unidades</b>
        </div>
      </div>
    </div>
  )
}

export default Row