import { useState } from "react"
import InputSection from "./InputSection"
import { GeneralInfo, EducationInfo, WorkInfo } from "./CVSection"
import "./../styles/App.css"

export default function App() {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    email: ""
  });

  const [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      level: "highschool",
      name: "",
      specialization: ""
    },
    {
      id: crypto.randomUUID(),
      level: "university",
      name: "",
      specialization: ""
    }
  ]);

  const [workData, setWorkData] = useState([]);

  function handleGeneralUpdate(value, id) {
    setGeneralData({
      ...generalData,
      [id]: value
    })
  }

  function handleEducationUpdate(value, id, level) {
    setEducationData(educationData.map(school => {
      if (school.level === level) {
        return {...school, [id]: value}
      } else {
        return school;
      }
    }))
  }

  function handleWorkUpdate(value, id, level, workID) {
    setWorkData(workData.map(work => {
      if (work.id === workID) {
        return {...work, [id]: value}
      } else {
        return work;
      }
    }))
  }

  function handleAddWork() {
    setWorkData([
      ...workData,
      {
        id: crypto.randomUUID(),
        name: "",
        location: "",
        description: "",
        startDate: "",
        endDate: ""
      }
    ])
  }

  return (
    <>
      <div className="left-side">
        <InputSection type="general" data={generalData} onChange={handleGeneralUpdate} />
        <InputSection type="education" data={educationData} onChange={handleEducationUpdate} />
        <InputSection type="work" data={workData} onChange={handleWorkUpdate} onAdd={handleAddWork} />
        {console.log("updated data:" + JSON.stringify(generalData))}
        {console.table(educationData)}
        {console.table(workData)}
      </div>
      <div className="right-side">
        <section>
          <GeneralInfo data={generalData}/>
          <EducationInfo data={educationData} />
          <WorkInfo data={workData} />
        </section>
      </div>
    </>
  )
}