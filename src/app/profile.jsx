import { useParams } from 'react-router-dom'
import { USERS } from '../constants'

export const Profile = () => {
    // const fullName = `${user.firstName} ${user.lastName}`

    const params = useParams()
    const user = USERS.find((user) => user.id === Number(params.id))
    const fullName = `${user.firstName} ${user.lastName}`

    return (
        <section>
            <img src={user.avatar} alt={fullName} />
            <h1>{fullName}</h1>
            <p>email: {user.email}</p>
            <p>gender: {user.gender}</p>
        </section>
    )
}
