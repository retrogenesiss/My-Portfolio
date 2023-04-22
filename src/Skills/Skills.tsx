import Skill from "./Skill/Skill";
import style from './../Common/Styles/Container.module.css'

function Skills() {
    return (
        <div className={style.commonBlock}>
                <h2>Навыки</h2>
                <p>Или чем я пользуюсь в работе:</p>
                <hr/>
                <div className={style.commonContainer}>
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
    )
}

export default Skills;