// const baseUrl = 'http://127.0.0.1:8000/'
// const baseUrl2 = 'http://127.0.0.1:8001/'

const baseUrl = 'bu0e3lvbob.execute-api.eu-west-1.amazonaws.com/'

const token = localStorage.getItem('token');














export const getObjective = `${baseUrl}v1/objectives/`
export const postObjective = `${baseUrl}v1/objective/`




//for department
export const getDepartment = `${baseUrl}v1/master-data/departments/`



//for user
export const getUser = `${baseUrl}v1/users/`
export const postUser = `${baseUrl}v1/user/`


// export const getUser = `${baseUrl2}users/`
// export const postUser = `${baseUrl2}user/`