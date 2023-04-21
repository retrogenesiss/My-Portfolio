import s from './Skill.module.css'
import style from './../../Common/Styles/Container.module.css'

type SkillsType = {
    title: string
    description: string
}

function Skill(props: SkillsType) {
    return (
        <div className={style.box}>
            <div className={s.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill;