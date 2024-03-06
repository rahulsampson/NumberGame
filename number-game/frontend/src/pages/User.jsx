import { useEffect, useState } from "react"

export default function User() {
    const [userData, setUserData] = useState({
        username: "",
        email:"",
        password: ""
    })

    useEffect(() => {
        getUserData()
        .then((res) => res.json())
        .then((data) => setUserData(data))
    })

    async function getUserData(){
        const res = await fetch("http://localhost:3000/api/user")
        return res
    }

  return (
    <div>
      UserName : {userData.username}
      <br/>
      Email : {userData.email}
      <br/>
      Password : {userData.password}
    </div>
  )
}
