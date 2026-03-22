import { useState } from "react"
import InputSection from "./InputSection"

export default function App() {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    surName: "",
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
    <InputSection type="general" onUpdate={"handleUpdate"}></InputSection>
  )
}