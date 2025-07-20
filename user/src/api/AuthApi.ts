import axios from "axios"

export const loginApi = async (email: string, password: string) => {
  await axios.post('http://localhost:5000/api/registration', {email,password})
}


