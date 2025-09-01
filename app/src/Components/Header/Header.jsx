import style from './style.module.css'
import menu from './img/menu.png'
import loupe from './img/loupe.png'
export default function Header(){
    return (
        <div className={style.wrapper}>
            <h1>DudeShape</h1>
            <div className={style.center}>
                <p>Home</p>
                <p>About</p>
                <p>Features</p>
                <p>Contact</p>
            </div>
            <div className={style.left}>
                <img src={loupe} alt='loupe'/>
                <img src={menu} alt='menu'/>
            </div>
        </div>
    )
}
