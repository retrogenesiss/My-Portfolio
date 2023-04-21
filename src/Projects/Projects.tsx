import s from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
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