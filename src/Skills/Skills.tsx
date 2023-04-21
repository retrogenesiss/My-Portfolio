import s from './Skills.module.css'
import Skill from "./Skill/Skill";
import style from './../Common/Styles/Container.module.css'

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Навыки</h2>
                <p className={s.text}>Или чем я пользуюсь в работе:</p>
                <hr/>
                <div className={style.common}>

                    <Skill title={'HTML'}
                           description={'Съешь ещё этих мягких французских булок, да выпей чаю...'}
                           />
                    <Skill title={'JS'}
                           description={'Съешь ещё этих мягких французских булок, да выпей чаю...'}
                    />
                    <Skill title={'CSS'}
                           description={'Съешь ещё этих мягких французских булок, да выпей чаю...'}
                    />
                    <Skill title={'React'}
                           description={'Съешь ещё этих мягких французских булок, да выпей чаю...Съешь ещё этих мягких французских булок, да выпей чаю'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;