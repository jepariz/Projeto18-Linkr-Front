import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import DebounceInput from "react-debounce-input";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import URL_back from "../../utils/URL_back";

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([])

  const handleSearch = (term) => {

    setSearchTerm(term)
   
   const promise = axios.get(`${URL_back}search?q=${term}`, 
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        })
      
        promise.then((res) => {
          const followed = [];
          const notFollowed = [];
          res.data.map(u => {
            if(u.isFollow) {
              followed.push(u)
            } else {
              notFollowed.push(u)
            }
          })
          setUsers([...followed, ...notFollowed]);
        })

        promise.catch((err) => {
          alert(err.response.data);
        }); 

  };

  return (
    <SearchContainer>
      <UserSearchInput
          minLength={3}
          debounceTimeout={300}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
      <SearchIcon></SearchIcon>
      {users.length > 0 ? <Results users={users} term={searchTerm}/> : null}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 563px;
  height: 45px;
  position: relative;
`;

const UserSearchInput = styled(DebounceInput).attrs({
  type: "search",
  placeholder: "Search for people",
})`
  width: 563px;
  height: 45px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 19px;
  font-family: "Lato", sans-serif;
  color: #515151;
  border: none;
  padding: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 19px;
    color: #c6c6c6;
    padding: 5px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  right: 10px;
  top: 23%;
  color: #c6c6c6;
  font-size: 25px;
`;

