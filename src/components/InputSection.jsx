import { Input } from "./Input"

export default function InputSection({type, data, onChange}) {

  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
          <section>
            <Input type="text" id="firstName" label="First Name" value={data.firstName} onChange={onChange}/>
            <Input type="text" id="lastName" label="Last Name" value={data.lastName} onChange={onChange}/>
            <Input type="date" id="birthday" label="Birthday" value={data.birthday} onChange={onChange}/>
            <Input type="email" id="email" label="Email" value={data.email} onChange={onChange}/>
            <Input type="tel" id="phone" label="Phone" value={data.phone} onChange={onChange}/>
          </section>
      </section>
    )
  }
}