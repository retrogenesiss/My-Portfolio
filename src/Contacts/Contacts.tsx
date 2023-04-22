import React from 'react';
import s from './Contacts.module.css'
import style from '../Common/Styles/Container.module.css'
import SuperInput from "../Common/SuperInput/SuperInput";
import SuperButton from "../Common/SuperButton/SuperButton";

const Contacts = () => {
    return (
        <div className={style.commonBlock}>
            <h2>Мои контакты</h2>
            <p>Вы можете связаться со мной любым удобным Вам способом:</p>
            <hr/>
            <div className={s.contactsForm}>
                <div className={s.dataContainer}>
                    <span className={s.text}>Или же оставьте свои данные, я сам Вам напишу:</span>
                    <div className={s.textField}>
                        <form>
                            <SuperInput placeholder="Введите имя"
                                        label="Введите имя"
                            />
                            <SuperInput placeholder="Введите почту"
                                        label="Введите почту"
                            />
                        </form>
                        <textarea className={s.textArea}
                                  placeholder='Наберите ваше сообщение...'
                        />
                        <SuperButton name={'Отправить'}/>
                    </div>
                    <div className={s.contactsArea}>
                        <span className={s.text}>Почта:</span>
                        <span className={style.description}>aergknseognsogn@gmail.com</span>
                        <span className={s.text}>Адрес:</span>
                        <span className={style.description}>Россия, г. Москва</span>
                        <span className={s.text}>Соцсети:</span>
                        <div className={s.icons}>
                            <div className={s.icon}></div>
                            <div className={s.icon}></div>
                            <div className={s.icon}></div>
                            <div className={s.icon}></div>
                        </div>
                    </div>
                </div>
                <div className={s.photoContainer}></div>
            </div>
        </div>
    );
};

export default Contacts;