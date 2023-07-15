import { useSelector } from "react-redux"
import s from "./LevelCounter.module.scss"
import { getXpNeeded } from "../../utils/levelCalculations/xpNeeded"

export const LevelCounter = (props) => {

    const level = useSelector(state => state.user.level)

    const xpNeeded = getXpNeeded(level, props.dreamLvl)

    return(
        <div className={s.wrapper}>
            <div className={s.level}>
                <p>Level</p>
                <span>{props.dreamLvl?props.dreamLvl>level?props.dreamLvl:level:level}</span>
            </div>
            <div className={s.needs}>
                <div>
                    <p>Sets Needed</p>
                    <span>{xpNeeded/100}</span>
                </div>
                <div>
                    <p>XP Needed</p>
                    <span>{xpNeeded}</span>
                </div>
            </div>
        </div>
    )
}