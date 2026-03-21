import { Input } from "./Input"

export default function InputSection({type, extendable = false, onUpdate}) {
  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
        <section>
          <Input type="text" id="first-name" label="First Name"/>
          <Input type="text" id="surname" label="Surname"/>
          <Input type="date" id="birthday" label="Birthday"/>
          <Input type="email" id="email" label="Email"/>
          <Input type="tel" id="phone" label="Phone"/>
        </section>
        <button>Update</button>
      </section>
    )
  }
}