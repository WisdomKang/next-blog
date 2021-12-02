import styles from "../styles/alert.module.css"
import cn from "classnames"

export default function Alert ( { children , type }){
    return (
        <div
        className={
            cn({
                [styles.success]: type === 'success',
                [styels.error]: type === 'error'
            })
        
        }
        >{children}</div>
    )
}