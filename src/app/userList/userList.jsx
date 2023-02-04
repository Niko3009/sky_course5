// import './index.css'

import { Link } from 'react-router-dom'

export const UserList = ({ users }) => {
    return (
        <ul className="UserList__list">
            {users.map((user) => (
                <li key={user.id} className="UserList__list-item">
                    <img src={user.avatar} alt={user.firstName} />
                    <Link to={`/profile/${user.id}`} className="UserList__name">
                        {user.firstName} {user.lastName}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
