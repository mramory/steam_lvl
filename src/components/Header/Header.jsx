import s from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import { useState } from "react"

export const Header = () => {

    const [active, setActive] = useState()

    return (
      <div className={s.background}>
      <div className={"container " + s.wrapper}>
        <button style={{cursor: "pointer"}}><div className={s.logo}>
          <img src={logo}></img>
        </div>
        </button>
        <div className={s.btns}>
          <div onClick={() => setActive("lvl")} className={active === "lvl"?s.active:null}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className={s.main_page_btn}
            >
              <g>
                <g>
                  <path d="M25,3.6l21.9,10.9v21L25,46.4L3.1,35.5v-21L25,3.6 M25,0.1L0,12.6v24.9l25,12.4l25-12.4V12.6L25,0.1L25,0.1z"></path>
                </g>
                <g>
                  <path d="M9.1,21l-2.7,0.7l-0.7-2.7l4.4-1.3h2.3V33H9.1V21z"></path>
                  <path
                    d="M15.9,30.3l5.1-4.2c1.9-1.6,2.6-2.4,2.6-3.7c0-1.3-0.9-2-2-2c-1.2,0-2,0.7-3.1,2l-2.4-1.9
											c1.5-2,3-3.2,5.7-3.2c3.2,0,5.2,1.9,5.2,4.7v0c0,2.5-1.3,3.8-4,5.9l-2.5,1.9h6.6V33H15.9V30.3z"
                  ></path>
                  <path
                    d="M30,25.4L30,25.4c0-4.5,2.7-7.9,6.8-7.9c4,0,6.7,3.4,6.7,7.8v0c0,4.4-2.7,7.9-6.8,7.9S30,29.8,30,25.4z
											M40.1,25.4L40.1,25.4c0-2.8-1.3-4.9-3.4-4.9c-2,0-3.3,2-3.3,4.8v0c0,2.8,1.3,4.9,3.4,4.9S40.1,28.2,40.1,25.4z"
                  ></path>
                </g>
              </g>
            </svg>
            <span>Level Up</span>
          </div>
          <div onClick={() => setActive("sell")} className={active === "sell"?s.active:null}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className={s.main_page_btn}
            >
              <g>
                <g>
                  <g>
                    <g>
                      <path d="M47.3,32.3c0.5-0.5,0.6-1.3,0.1-1.9l-0.5-0.6L47.3,32.3z"></path>
                    </g>
                    <path d="M6.4,27.5c-1.4-1.7-1.2-4.2,0.5-5.6l1.6-1.3l-0.7-3.8l-7.2,6.1c-0.6,0.5-0.7,1.4-0.2,2L11.5,38l-1-5.6 L6.4,27.5z"></path>
                  </g>
                  <g>
                    <path
                      d="M16.4,39.2v-3c-0.2-0.4-0.4-0.8-0.5-1.3l-3.4-19.3c-0.4-2.2,1.1-4.2,3.2-4.6l0.7-0.1v-2L9.9,10
											c-0.8,0.1-1.3,0.9-1.1,1.6l6.1,34.1c0.1,0.7,0.7,1.2,1.4,1.2c0.1,0,0.2,0,0.2,0l19.7-3.5H20.5C18.2,43.4,16.4,41.5,16.4,39.2z"
                    ></path>
                  </g>
                </g>
                <path
                  d="M48.6,3.1H20.5c-0.8,0-1.4,0.6-1.4,1.4v34.7c0,0.8,0.6,1.4,1.4,1.4h28.1c0.8,0,1.4-0.6,1.4-1.4V4.5
											C50,3.7,49.4,3.1,48.6,3.1z M48.2,25.3c0,4-3.2,7.2-7.2,7.2H28.1c-4,0-7.2-3.2-7.2-7.2V12.1c0-4,3.2-7.2,7.2-7.2H41
											c4,0,7.2,3.2,7.2,7.2V25.3z"
                ></path>
              </g>
            </svg>
            <span>Sell</span>
          </div>
          <div className={s.login}>
            <button className={s.login_btn}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                width="26px"
                height="26px"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M24.9,0C12.2,0,1.7,9.5,0.1,21.8l14.4,5.8c1.1-0.6,2.2-0.9,3.3-0.9c0.3,0,0.3,0,0.6,0.1l5.3-7.6
								c0-4.7,3.9-8.4,8.4-8.4c4.7,0,8.6,3.8,8.6,8.4c0,4.7-3.9,8.5-8.6,8.5L24,33.6c-0.3,3.1-3.1,5.6-6.1,5.6s-5.6-2-6.1-4.9L0.4,29.8
								C2.6,41.3,12.7,50,24.9,50c13.8,0,25-11.2,25-25C49.9,11.2,38.7,0,24.9,0"
                  ></path>
                  <path
                    d="M15.9,36.1c-0.8-0.3-1.4-0.6-2.2-1c0.8,1.5,2.2,2.4,4.2,2.4c2.5,0,4.5-2,4.5-4.5c0-2.6-2-4.7-4.5-4.7
								c-0.3,0-0.8,0.1-1.1,0.1l2,0.8c2,0.8,2.5,3.1,2,4.9C19.8,35.9,17.9,37,15.9,36.1"
                  ></path>
                  <path
                    d="M27.6,19.2c0-2.5,2-4.5,4.5-4.5c2.5,0,4.7,2,4.7,4.5c0,2.5-2.2,4.5-4.7,4.5C29.6,23.7,27.6,21.7,27.6,19.2
								 M37.9,19.2c0-3.1-2.5-5.7-5.9-5.7c-3.1,0-5.6,2.5-5.6,5.7c0,3.1,2.5,5.7,5.6,5.7C35.4,24.9,37.9,22.4,37.9,19.2"
                  ></path>
                </g>
              </svg>
              <span>Sign in through Steam</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    );
}