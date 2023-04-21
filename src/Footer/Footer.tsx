import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <div className={s.name}>Артур Зайцев</div>
                <div className={s.iconContainer}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div className={s.footerPolicy}>@2023 Все права защищены.</div>
            </div>
        </div>
    )
}

export default Footer;