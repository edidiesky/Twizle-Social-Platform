import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import styled from "styled-components";

const Search: React.FC = () => {
  return (
    <SearchContainer>
      <div className="w-90 auto flex column gap-1">
        <form action="" className="w-90 family1 auto flex item-center gap-2">
          <BsSearch color="var(--dark-1)" />
          <input
            type="text"
            placeholder="Search"
            className="input fs-16 w-100 text-dark family1"
          />
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
  background-color: var(--white);
  z-index: 30;
  padding: 1rem 0;

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
    border-radius: 40px;
    position: sticky;
    top: 0;
    z-index: 3000;

    left: 0;
    @media (max-width: 920px) {
      gap: 0.6rem;
      height: 4.5rem;
    }
    svg {
      font-size: 20px;
      @media (max-width: 900px) {
        font-size: 28px;
      }
    }
    .input {
    }
  }
`;
