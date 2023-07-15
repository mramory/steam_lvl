import { getBoosterDropRate } from "../../utils/levelCalculations/boosterPackDropRate"
import { getFriendCap } from "../../utils/levelCalculations/friendCap"
import { getShowCases } from "../../utils/levelCalculations/showcases"
import { getXpNeeded } from "../../utils/levelCalculations/xpNeeded"
import s from "./WillGet.module.scss"
import { useSelector } from "react-redux"


export const WillGet = (props) => {

    const level = useSelector(state => state.user.level)

    const showCases = getShowCases(props.dreamLvl)
    const friendCap = getFriendCap(level, props.dreamLvl)
    const boosterDropRate = getBoosterDropRate(props.dreamLvl)

    const xpNeeded = getXpNeeded(level, props.dreamLvl)

    return(
        <div className={s.wrapper}>
            <div className={s.text}>You will get</div>
            <div className={s.items}>
                <div>
                    <p>Game Coupons:</p>
                    <span>{xpNeeded/100}</span>
                </div>
                <div>
                    <p>Emotes & Backgrounds:</p>
                    <span>{(xpNeeded/100)*2}</span>
                </div>
                <div>
                    <p>Showcases:</p>
                    <span>{showCases}<span className={s.opacity}>/20</span></span>
                </div>
                <div>
                    <p>Friend Cap:</p>
                    <span>{friendCap}<span className={s.opacity}>/2000</span></span>
                </div>
                <div>
                    <p>Booster Pack Drop Rate:</p>
                    <span>+{boosterDropRate}%</span>
                </div>
                <div>
                    <p>SteamLadder World Rank:</p>
                    <span>#2359986</span>
                </div>
            </div>
        </div>
    )
}