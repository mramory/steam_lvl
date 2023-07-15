import { ThreeCircles } from "react-loader-spinner"
import { Calculator } from "../../components/Calculator/Calculator"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { LevelCounter } from "../../components/LevelCounter/LevelCounter"
import { Payments } from "../../components/Payments/Payments"
import { WillGet } from "../../components/WillGet/WillGet"
import s from "./MainPage.module.scss"
import { useState } from "react"

export const MainPage = (props) => {

    const [dreamLvl, setDreamLvl] = useState(null)

    return (
      <>
        <Header />
        {props.loading ? (
          <ThreeCircles
            color="#9534eb"
            wrapperClass={s.loading_wrapper}
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        ) : (
          <div className={"container " + s.main_part}>
            <div>
              <Calculator setDreamLvl={setDreamLvl} />
              <Payments />
            </div>
            <div className={s.level}>
              <LevelCounter dreamLvl={dreamLvl} />
              <WillGet dreamLvl={dreamLvl} />
            </div>
          </div>
        )}
        <Footer />
      </>
    );
}