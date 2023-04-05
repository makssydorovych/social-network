import React from 'react';
import s from "../../components/Users/users.module.css";

const Preloader:React.FC = () => {
    return (
        <div>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"}
                className={s.userPhoto} alt={""}/>
        </div>
    );
};

export default Preloader;