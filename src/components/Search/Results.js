import {useNavigate} from "react-router-dom";
import styled from "styled-components"

export default function Results({users, term}) {

    const navigate = useNavigate();

  return (
    <ResultsContainer show={term.length >= 3}>
        <UserInfo>
            {users.map((u, index) => (
                <div  key={index} onClick={navigate(`/user/${u.id}`)}> 
                <img src={u.photo}></img>
                <p>{u.username}</p>
                </div>
           ))}
        </UserInfo>
    </ResultsContainer>
  )
}

const ResultsContainer = styled.div`
  width: 563px;
  height: auto;
  border-radius: 8px;
  background-color: #e7e7e7;
  position: absolute;
  top:0;
  left: 0;
  z-index: -1;
  display: ${(props) => {
    if (props.show) {
      return "flex";
    } else {
      return "none";
    }
  }};
    
`;

const UserInfo = styled.div`
    margin-top: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

div{
    display: flex;
    gap: 10px;
    align-items: center;

    a{
        text-decoration: none;
    }
}

p{
    font-size: 19px;
    color: #515151;
    font-family:"Lato", sans-serif;
  }

img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
}
`