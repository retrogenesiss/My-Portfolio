import s from './Projects.module.css'
import Project from "./Project/Project";
import style from './../Common/Styles/Container.module.css'

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои проекты</h2>
                <p className={s.text}>Интеррактивные примеры моих работ:</p>
                <hr/>
                <div className={style.common}>
                    <Project title={'Project name'}
                             description={'Здесь находится описание проектаЗдесь находится описание проектаЗдесь находится описание проектаЗдесь находится описание проекта'}
                    />
                    <Project title={'Another project'}
                             description={'Здесь находится описание проекта'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;