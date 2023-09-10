import axios from "axios";
import { Patient, PatientFormValues, SinglePatient } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const getOne = async (id:string ) =>{
  try {
  const {data} = await axios.get<SinglePatient>(`${apiBaseUrl}/patients/${id}`)
  return data
  } 
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status)
      console.error(error.response);
    
    } else {
      console.error(error);
    }
  }
 
}

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, create,getOne
};

