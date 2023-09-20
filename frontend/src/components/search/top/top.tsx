import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BsSearch } from "react-icons/bs";
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';
import { GetUserProfile } from '../../../features/auth/authReducer';
import Search from '../../common/right/Search';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
    setModal?: SetStateProp<Boolean>;
}

const Top: React.FC<modalType> = ({ setModal }) => {
    const { userDetails } = useAppSelector(store => store.auth)
    const [tab, setTab] = React.useState(0)
    const dispatch = useAppDispatch()
    const { name } = useParams()
    const { followings } = useAppSelector(store => store.auth)
    React.useEffect(() => {
        //  dispatch(get)
        if (name) {
            dispatch(GetUserProfile(name))
        }
    }, [name])

    const { tweets, tweetisLoading } = useAppSelector(store => store.tweet)



    return (
        <TopStyles className="w-100 flex column gap-1">

            <div className='flex item-center gap-1 w-90 auto'>
                <Link to={'/'} className="icons flex item-center justify-center"><AiOutlineArrowLeft color='var(--dark-1)' fontSize={'20px'} /></Link>
                <div className="flex-1">
                    <form action="" className="w-90 family1 auto flex item-center gap-2">
                        <label htmlFor="search" className="flex h-100 w-100 item-center gap-2">
                            <BsSearch color="var(--dark-1)" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="input fs-15 w-100 text-dark text-light"
                            />
                        </label>

                    </form>
                </div>
            </div>
            <ul className="w-100 flex item-center text-bold fs-16 profilelist">
                <li className="flex-1 profileTag active w-100">
                    <NavLink activeClassName='active' to={``} className="tag text-dark">Top</NavLink>
                </li>
                <li className="flex-1 profileTag w-100">
                    <div className="tag text-dark">Latest</div>
                </li>
                <li className="flex-1 profileTag w-100">
                    <div className="tag text-dark">People</div>
                </li>
                <li className="flex-1 profileTag w-100">
                    <div className="tag text-dark">Media</div>
                </li>
                <li className="flex-1 profileTag w-100">
                    <div className="tag text-dark">List</div>
                </li>

            </ul>

        </TopStyles>
    )
}

const TopStyles = styled.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top1);
  z-index: 300;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1rem 0;
   .tag {
        cursor: pointer;
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
  font-family: "CustomFont_Normal", sans-serif;
  font-weight: normal;
            position: relative;
            &.active {
            position: relative;
            font-weight: 700;
            font-family: "CustomFont_Bold", sans-serif;
             &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -100%;
            }
            }
           
        }
         form {
   padding:1.4rem 2rem;
    background-color: #EFF3F4;
      border: 1px solid #EFF3F4;

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
   .profilelist {
        border-bottom:1px solid var(--border);

        .profileTag {
            padding: 2rem;
            text-align:center;
              /* background:var(--grey-hover); */
            &.active {
                background:var(--grey-hover);
            }
            &:hover {
                background:var(--grey-hover);
            }
        }
    }
  /* backdrop-filter: c; */
  `

export default Top