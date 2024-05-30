import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { motion, Variants } from 'framer-motion'
import { RiVideoAddFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetUserSearch } from "../../../features/auth/authReducer";


const Search: React.FC = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropDown] = useState(false)
  const [debouncedvalue, setDebouncedValue] = useState<string>('')
  const navigate = useNavigate()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    // setDropDown(true)
    e.preventDefault()
    navigate(`/search?q=${search}`)
  }

  const handleOffDropDown = ()=> {
    setDebouncedValue('')
    setDropDown(false)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(search), 500)
    return () => clearTimeout(timer)
  }, [setDebouncedValue, search])

  const dispatch = useAppDispatch()
  const { userSearchResult } = useAppSelector(store => store.auth)

  React.useEffect(() => {
    if (debouncedvalue) {
      dispatch(GetUserSearch({ authdata: debouncedvalue }))
    }
  }, [debouncedvalue])


  const animate: Variants = {
    initial: {
      opacity: 0,
      visibility: "hidden",
      transform: 'scale(0)'

    },
    open: {
      opacity: 1,
      visibility: "visible",
      transform: "scale(1)"
    },

    exit: {
      opacity: 0,
      visibility: "hidden",
      transform: "scale(0)"
    },

  }


  // console.log(dropdown)
  return (
    <>
      {dropdown && <div onClick={handleOffDropDown} className="drop_background"></div>}
      <SearchContainer>
        <div className="w-90 form_wrapper auto flex column gap-1">
          <div onClick={() => setDropDown(true)} className="w-100">
            <form onSubmit={(e) => handleSearch(e)} action="" className="w-90 family1 auto flex item-center gap-2">
              <label htmlFor="search" className="flex h-100 w-100 item-center gap-2">
                <BsSearch color="var(--dark-1)" />
                <input
                  value={search}
                  name='search'
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  autoComplete="off"
                  placeholder="Search"
                  className="input fs-15 w-100 text-dark text-light"
                />
              </label>

            </form>
          </div>
          <motion.div
            variants={animate}
            initial='initial'
            animate={dropdown ? "open" : "exit"}
            exit="exit"

            className="search_dropdown w-100">
            <div className="w-100 flex column gap-1">
              <h4 className="fs-18 text-bold text-dark">Search</h4>
              <div className="w-100 flex column">
                {
                  userSearchResult?.map((user?: any) => {
                    return <div className="search_tab w-100 flex item-center">
                      {
                        user?.profile_image_url ?
                          <img src={user?.profile_image_url} alt="images-avatar" className="avatar_large" />
                          : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="avatar_large" className="avatar_large" />

                      }
                      <h4 className="fs-16 text-dark text-extra-bold">
                        {user?.name}

                        <span style={{ marginTop: "4px" }} className="block text-light text-grey2 fs-14">
                          {user?.display_name}
                        </span>
                      </h4>
                    </div>
                  })
                }
              </div>
            </div>
          </motion.div>

        </div>
      </SearchContainer>
    </>
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
  .form_wrapper{
    position:relative;
    .search_dropdown {
      width: 95%;
      margin-left:1rem ;
      position:absolute;
      top:120%;
      left:0;
      padding:1.4rem 0;
      background-color: var(--white);
      border-radius: 10px;
      box-shadow:var(--shadow);
      h4 {
        padding:0 1.6rem;
      }
      .search_tab{
        padding:1.3rem 1.5rem;
        .avatar_large {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  object-fit: cover;
  /* border: 1px solid rgba(0, 0, 0, 0.07); */
}
        &:hover {
          background:var(--grey-4);
        }

      }
    }
  }
  form {
   padding:1.2rem 2rem;
    background-color: var(--grey-4);
    border: 1px solid var(--grey-4);

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
