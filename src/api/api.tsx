import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "19e10eb8-2dc0-4d81-9c3d-8b0abd71eea1"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => response.data)
    },
    followUser(id: number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => response.data)
    }
}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true
//         }).then(response => response.data)
// }

// const unfollowUser = (id: number) => {
//     return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
//         withCredentials: true,
//         headers: {
//             "API-KEY": "19e10eb8-2dc0-4d81-9c3d-8b0abd71eea1"
//         }
//     }).then(response => response.data)
// }

// export const followUser = (id: number) => {
//     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
//         withCredentials: true,
//         headers: {
//             "API-KEY": "19e10eb8-2dc0-4d81-9c3d-8b0abd71eea1"
//         }}).then(response => response.data)
// }