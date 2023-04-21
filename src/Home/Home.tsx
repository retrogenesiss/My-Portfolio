import s from './Home.module.css'

function Home() {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Артур</h1>
                    <span className={s.subtitle}>И я frontend-разработчик</span>
                </div>
            </div>
        </div>
    )
}

export default Home;