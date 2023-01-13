import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import DebounceInput from "react-debounce-input";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import URL_back from "../../utils/URL_back";

export default function UserSearchMobile() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    const promise = axios.get(`${URL_back}search?q=${term}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
      },
    });

    promise.then((res) => {
      setUsers(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data);
    });
  };

  return (
    <SearchContainer>
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchTerm}
        placeholder="Search for people"
        element={UserSearchInput}
      />
      <SearchIcon></SearchIcon>

      {users.length > 0 ? (
        <Results users={users} term={searchTerm} setUsers={setUsers} />
      ) : null}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin-top: 90px;
  width: 100%;
  position: relative;
  background-color: #333333;
  display: flex;
  justify-content: center;

  @media (min-width: 376px) {
    display: none;
  }
`;

const UserSearchInput = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 19px;
  font-family: "Lato", sans-serif;
  color: #515151;
  border: none;
  padding: 8px;
  box-sizing: border-box;
  place-self: center;

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
  right: 20px;
  top: 23%;
  color: #c6c6c6;
  font-size: 25px;
`;
