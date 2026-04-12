import { Input } from "./Input"
import { format } from "date-fns"

export default function InputSection({type, data, onChange, onAdd}) {

  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
          <section className="general inputs-container">
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
        <section className="education inputs-container">
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
      </section>
    )
  }

  if (type === "work") {
    return (
      <section>
        <h2>Work Experience</h2>
        <section className="work inputs-container">
          {data.map((work, id) => (
            <div key={work.id}>
              <h3>Practical Experience {id + 1}</h3>
              <Input
                workID={work.id}
                type="text"
                id="name"
                htmlID={"work-name" + work.id}
                label="Company Name"
                value={work.name}
                onChange={onChange}/>
              <Input
                workID={work.id}
                type="text"
                id="location"
                htmlID={"work-location" + work.id}
                label="Work Location"
                value={work.location}
                onChange={onChange}
              />
              <div className="input-data-container">
                <label htmlFor={"description" + work.id}>Work Description</label>
                <textarea name="work-description" id={"description" + work.id} value={work.description} onChange={e => onChange(e.target.value, "description", null, work.id)}></textarea>
              </div>
              <Input
                workID={work.id}
                type="date"
                id="startDate"
                htmlID={"work-start-date" + work.id}
                label="Starting Date"
                value={work.startDate && format(work.startDate, "yyyy-MM-dd")}
                onChange={onChange}/>
              <Input
                workID={work.id}
                type="date"
                id="endDate"
                htmlID={"work-end-date" + work.id}
                label="Ending date"
                value={work.endDate && format(work.endDate, "yyyy-MM-dd")}
                onChange={onChange}/>
            </div>
          ))}
        </section>
        <button onClick={onAdd}>Add Work Experience</button>
      </section>
    )
  }
}