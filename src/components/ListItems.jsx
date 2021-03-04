import React, { useEffect, useState } from "react"
import Item from "./Item"
import ItemImg from "./ItemImg"

const API = "https://api.covid19api.com/"

const getDataFromApi = async () => {
  try {
    let res = await fetch(
      `${API}country/colombia/status/confirmed?from=2021-02-01T00:00:00Z&to=2021-02-15T00:00:00Z`
    )
    res = await res.json()
    return res
  } catch (error) {
    return error
  }
}

const ListItems = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    getDataFromApi().then((_data) => setData(_data))
  }, [])

  try {
    return (
      <>
        <ItemImg />
        <section className="app list__items--default">
          <ul>
            {data &&
              data.map((_data) => <Item key={_data.Date} data={_data} />)}
          </ul>
        </section>
      </>
    )
  } catch (error) {
    return <p>Error! {JSON.stringify(error)}</p>
  }
}

export default ListItems
