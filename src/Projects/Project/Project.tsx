import s from './Project.module.css'
import style from './../../Common/Styles/Container.module.css'

type ProjectsType = {
    title: string
    description: string
}

function Project(props: ProjectsType) {
    return (
        <div className={`${s.box} ${style.box}`}>
            <div className={s.imgContainer}>
            <div className={s.image}></div>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <hr/>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Project;

// {`${s.box} ${style.box}`}