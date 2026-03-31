import { format } from "date-fns";


function GeneralInfo({data}) {
  return (
    <section>
      <h2>General Information</h2>
      <div>
        <p><span>Name:</span> {data.firstName + " " + data.lastName}</p>
        <p><span>Date of Birth:</span> {data.birthday ? format(data.birthday, "yyyy-MM-dd") : ""}</p>
        <p><span>Email:</span> {data.email}</p>
        <p><span>Phone Number:</span> {data.phone}</p>
      </div>
    </section>
  )
}

function EducationInfo({data}) {
  return (
    <section>
      <h2>Education</h2>
      <div>
        {data.map(school => (
          <div>
            <h3>{school.level === "highschool" ? "Highschool" : "University"}</h3>
            <p><span>School Name:</span> {school.name}</p>
            <p><span>Specialization:</span> {school.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { GeneralInfo, EducationInfo };