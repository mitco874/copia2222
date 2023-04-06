import { employeesApi } from "../api";

const getHeaders = (): any =>{
    const token = localStorage.getItem("token") || "";
    return {
        headers:{ 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token},
    }
}

export const post =  async( path: string, body: any ) => {
    return await employeesApi.post(path, body, getHeaders());
}

export const get =  async( path: string ) => {
    return await employeesApi.get(path, getHeaders());
}

export const put =  async( path: string, body: any ) => {
    return await employeesApi.put(path, body, getHeaders());
}

export const patch =  async( path: string, body: any ) => {
    return await employeesApi.patch(path, body, getHeaders());
}

export const remove =  async( path: string ) => {
    return await employeesApi.delete(path, getHeaders() );
}

export const existUserLogged = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {

        await employeesApi.get(process.env.REACT_APP_BACKEND_VERIFY_TOKEN_URL || "http://localhost:8080", getHeaders());
        return true;

      } catch (error) {
        localStorage.removeItem("token")
        return false;
      }
    }
  
    return false;
  };
  


