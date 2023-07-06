import s from "./LevelCounter.module.scss"

export const LevelCounter = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.level}>
                <p>Level</p>
                <span>0</span>
            </div>
            <div className={s.needs}>
                <div>
                    <p>Sets Needed</p>
                    <span>0</span>
                </div>
                <div>
                    <p>XP Needed</p>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}