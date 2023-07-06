import s from "./Calculator.module.scss";

export const Calculator = () => {
  return (
    <div>
      <div className={s.label}>
        <h2>Steam Level Calculator</h2>
        <div>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
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
          <span>Sign in</span>
        </div>
      </div>
      <div className={s.calculator}>
        <div className={s.row}>
          <div className={s.your}>
            <h3>Your Steam Level</h3>
            <input placeholder="0"></input>
          </div>
          <div className={s.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <polygon points="50,15.4 44.1,9.6 25,28.7 5.9,9.6 0,15.4 25,40.4 "></polygon>
            </svg>
          </div>
          <div className={s.dream}>
            <h3>Dream Steam Level</h3>
            <input placeholder="0"></input>
            <div className={s.shortcuts}>
              <span>+1</span>
              <span>+10</span>
              <span>+100</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M7,0.1c-3.9,0-6.9,3-6.9,6.9c0,3.9,3,6.9,6.9,6.9c3.9,0,6.9-3,6.9-6.9C13.9,3.1,10.9,0.1,7,0.1z M7,12.9   c-3.3,0-5.9-2.7-5.9-5.9S3.7,1.1,7,1.1s5.9,2.7,5.9,5.9S10.3,12.9,7,12.9z"></path>
                    <polygon points="10.4,4.2 9.8,3.6 7,6.3 4.2,3.6 3.6,4.2 6.3,7 3.6,9.7 3.6,9.8 4.2,10.4 7,7.7 9.7,10.4 9.8,10.4    10.4,9.8 7.7,7 10.4,4.3  "></polygon>
                  </g>
                </svg>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
