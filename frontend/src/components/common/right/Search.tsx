import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search: React.FC = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search?q=${search}`)
  }
  return (
    <SearchContainer>
      <div className="w-90 auto flex column gap-1">
        <form onSubmit={(e) => handleSearch(e)} action="" className="w-90 family1 auto flex item-center gap-2">
          <label htmlFor="search" className="flex h-100 w-100 item-center gap-2">
            <BsSearch color="var(--dark-1)" />
            <input
              value={search}
              name='search'
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="input fs-15 w-100 text-dark text-light"
            />
          </label>

        </form>
      </div>
    </SearchContainer>
  );
}

export default Search

const SearchContainer = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 3000;
  padding: 1rem 0;
  background-color: var(--top);
  padding: 1rem 0;
  backdrop-filter: blur(12px);
  

  .icon {
    background-color: var(--grey-2);
  }
  .icon svg {
    color: var(--dark-1);
    cursor: pointer;
  }
  .avatar {
    width: 4rem;
    height: 4rem;
  }
  h4 {
    font-weight: 700;
    @media (max-width: 920px) {
      display: none;
    }
  }
  form {
   padding:1.4rem 2rem;
    background-color: var(--grey-2);
      border: 1px solid var(--grey-2);

    border-radius: 40px;
    position: sticky;
    top: 0;
    z-index: 3000;

    left: 0;
    &:hover {
      border: 1px solid var(--blue-1);
    }
    @media (max-width: 920px) {
      gap: 0.6rem;
      height: 4.5rem;
    }
   label {
     svg {
      font-size: 20px;
      @media (max-width: 900px) {
        font-size: 28px;
      }
    }
    .input {
      font-family: inherit;
    }
   }
  }
`;
