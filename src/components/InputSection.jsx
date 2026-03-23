import { Input } from "./Input"
import { format } from "date-fns"

export default function InputSection({type, data, onChange, onAdd}) {

  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
          <section>
            <Input 
              type="text" 
              id="firstName" 
              htmlID="firstName" 
              label="First Name" 
              value={data.firstName} 
              onChange={onChange}/>
            <Input 
              type="text" 
              id="lastName" 
              htmlID="lastName" 
              label="Last Name" 
              value={data.lastName} 
              onChange={onChange}/>
            <Input 
              type="date" 
              id="birthday" 
              htmlID="birthday" 
              label="Birthday" 
              value={data.birthday && format(data.birthday, "yyyy-MM-dd")} 
              onChange={onChange}/>
            <Input 
              type="email" 
              id="email" 
              htmlID="email" 
              label="Email" 
              value={data.email} 
              onChange={onChange}/>
            <Input 
              type="tel" 
              id="phone" 
              htmlID="phone" 
              label="Phone" 
              value={data.phone} 
              onChange={onChange}/>
          </section>
      </section>
    )
  }

  if (type === "education") {
    return (
      <section>
        <h2>Education</h2>
        {data.map(school => (
          <div key={school.id}>
            <h3>{school.level.charAt(0).toUpperCase() + school.level.slice(1)}</h3>
            <Input 
              type="text" 
              id="name" 
              htmlID={`name-${school.level}`} 
              label={school.level.charAt(0).toUpperCase() + school.level.slice(1) + " Name"} 
              value={school.name} 
              onChange={onChange} 
              level={school.level}/>
            <Input 
              type="text" 
              id="specialization" 
              htmlID={`specialization-${school.level}`} 
              label="Specialization" 
              value={school.specialization} 
              onChange={onChange} 
              level={school.level}/>
          </div>
        ))}
      </section>
    )
  }

  if (type === "work") {
    return (
      <section>
        <h2>Work Experience</h2>
        {data.map(work => (
          <div key={work.id}>
            {work.id}
          </div>
        ))}
        <button onClick={onAdd}>Add Work Experience</button>
      </section>
    )
  }
}