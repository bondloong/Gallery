import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard/UserCard';

const UserCardList = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    justify-content: center;
    flex-flow: wrap;
`;

export default function UserCards(props) {

    return (
        <UserCardList>
            {
                 props.users.map((user) => {
                    return <UserCard key={user.id} user={user} />
                })
            }
        </UserCardList>
    )
}
