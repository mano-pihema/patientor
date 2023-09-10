import React, { useEffect,useState } from 'react'

import { useParams } from 'react-router-dom'
import patientService from '../services/patients'
import { SinglePatient} from '../types'

const GetPatient = () => {

  const [patient,setPatient] = useState<SinglePatient>()

  const{id} = useParams()

  useEffect(()=>{
    if(id){
    const fetchPatient = async () => {
      const person = await patientService.getOne(id);
      setPatient(person);
    };
    fetchPatient();
    }

  },[id])

  if(patient===undefined)return null

  return (
    <div>
      <p>{patient.name}</p>

    </div>
  )
}

export default GetPatient