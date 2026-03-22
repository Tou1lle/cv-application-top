import { useState } from "react"
import InputSection from "./InputSection"

export default function App() {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    email: ""
  });

  function handleGeneralUpdate(value, id) {
        setGeneralData({
      ...generalData,
      [id]: value
    })
  }

  return (
    <>
      <InputSection type="general" data={generalData} onChange={handleGeneralUpdate}></InputSection>
      {console.log("updated data:" + JSON.stringify(generalData))}
    </>
  )
}