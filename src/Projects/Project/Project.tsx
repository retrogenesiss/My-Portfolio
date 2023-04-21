import s from './Project.module.css'
import style from './../../Common/Styles/Container.module.css'

type ProjectsType = {
    title: string
    description: string
}

function Project(props: ProjectsType) {
    return (
        <div className={`${s.box} ${style.box}`}>
            <div className={s.image}></div>
            <h3 className={style.title}>{props.title}</h3>
            <hr/>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Project;