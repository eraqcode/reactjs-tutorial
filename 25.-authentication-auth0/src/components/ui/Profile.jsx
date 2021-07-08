import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
    const { user } = useAuth0();
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div>
            {
                user &&
                (
                    <>
                        <div className="user__img">
                            <img src={user.picture} alt={user.name} width="80" height="80" />
                        </div>
                        <div className="user__body">
                            <h2> { user.name } </h2>
                            <p>
                                { user.email }
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}
