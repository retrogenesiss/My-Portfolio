import s from './Main.module.css'
import styleContainer from './../Common/Styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hello there, general Kenobi</span>
                    <h1>My name is Arthur</h1>
                    <p>I`m a frontend developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main;