import { Calculator } from "../../components/Calculator/Calculator"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { LevelCounter } from "../../components/LevelCounter/LevelCounter"
import { Payments } from "../../components/Payments/Payments"
import { WillGet } from "../../components/WillGet/WillGet"
import s from "./MainPage.module.scss"

export const MainPage = () => {
    return(
        <>
            <Header />
            <div className={"container " + s.main_part}>
                <div>
                    <Calculator />
                    <Payments />
                </div>
                <div className={s.level}>
                    <LevelCounter />
                    <WillGet />
                </div>
            </div>
            <Footer />
        </>
    )
}