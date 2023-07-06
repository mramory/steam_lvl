import s from "./Payment.module.scss"


export const Payment = (props) => {
    return(
        <div className={s.wrapper}>
            {props.img}
            <div className={s.text}>
                <p>{props.name}</p>
                <span>${props.price}</span>
            </div>
        </div>
    )
}