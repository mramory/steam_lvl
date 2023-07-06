import s from "./WillGet.module.scss"


export const WillGet = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.text}>You will get</div>
            <div className={s.items}>
                <div>
                    <p>Game Coupons:</p>
                    <span>0</span>
                </div>
                <div>
                    <p>Emotes & Backgrounds:</p>
                    <span>0</span>
                </div>
                <div>
                    <p>Showcases:</p>
                    <span>0<span className={s.opacity}>/20</span></span>
                </div>
                <div>
                    <p>Friend Cap:</p>
                    <span>250<span className={s.opacity}>/2000</span></span>
                </div>
                <div>
                    <p>Booster Pack Drop Rate:</p>
                    <span>+0%</span>
                </div>
                <div>
                    <p>SteamLadder World Rank:</p>
                    <span>#2359986</span>
                </div>
            </div>
        </div>
    )
}