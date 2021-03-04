import React from "react"
import ListItems from "./ListItems"
import '@scss/app.scss'
import '@scss/components.scss'

const App = () => {
  return (
    <>
      <section className="title--default">
        <h1>Dayli cases of COVID in Colombia</h1>
      </section>
      <ListItems />      
    </>
  )
}

export default App
