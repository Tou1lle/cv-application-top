import { useState } from "react"
import { Input } from "./Input"

export default function InputSection({type, onUpdate}) {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    email: ""
  });

  function hangleGeneralData(value, id) {
    setGeneralData({
      ...generalData,
      [id]: value
    })
  }

  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
          <section>
            <Input type="text" id="firstName" label="First Name" value={generalData.firstName} onChange={hangleGeneralData}/>
            <Input type="text" id="lastName" label="Surname" value={generalData.lastName} onChange={hangleGeneralData}/>
            <Input type="date" id="birthday" label="Birthday" value={generalData.birthday} onChange={hangleGeneralData}/>
            <Input type="email" id="email" label="Email" value={generalData.email} onChange={hangleGeneralData}/>
            <Input type="tel" id="phone" label="Phone" value={generalData.phone} onChange={hangleGeneralData}/>
          </section>
        <button onClick={() => {onUpdate("monkey")}}>Update</button>
      </section>
    )
  }
}