import React from 'react';
import css from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={css.footerBlock}>
            <div className={css.footerContainer}>
                {/*<h2 className={css.title}>Sergei Minko</h2>*/}
                <div className={css.social}>
                    <a href="https://github.com/makssydorovych">GitHub</a>
                    <a href="https://www.linkedin.com/in/maksym-sydorovych-4571161a2/">LinkedIn</a>
                    <a href="https://msaserj.ru">Maksym</a>
                </div>
                <h3 className={css.rights}>
                    © 2023. Copyright
                </h3>
            </div>
        </footer>
    );
};
