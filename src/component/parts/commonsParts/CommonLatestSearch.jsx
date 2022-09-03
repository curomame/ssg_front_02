import React from 'react'

function CommonLatestSearch({lastestTerm}) {
  return (
    <>
      {lastestTerm.map((word,i) => {
        return <div key={i}>{word}</div>
      })}
    </>
  )
}

export default CommonLatestSearch