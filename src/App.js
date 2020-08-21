import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import './App.css';
import UserCards from './UserCards/UserCards'

const Wrapper = styled.div`
  background-color: #778899;
`

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setUsers(json))

  }, [])

  return (
    <Wrapper>
      < UserCards users={users}/>
    </Wrapper>
  );
}

export default App;
