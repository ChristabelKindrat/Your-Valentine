import React from 'react';
import {useState} from "react";

import './button_of_love.style.css';
import '../../styles/media.css';
import {heart_img} from "../../asserts";

function ButtonOfLove() {
    const [open, setOpen] = useState(false);

    return (
        <div className={'wrap'}>
            <p className={'text'}>
                The person who sent you this page wants to show you something .
            </p>
            <button
                className={'button'}
                onClick={() => setOpen(!open)}
            >
                {open ?
                    <div className={'modal_hearts'}>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_1'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_2'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_3'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_4'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_5'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_6'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_7'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_8'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_9'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_10'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_11'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_12'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_13'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_14'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_15'}/>
                    </span>
                    <span>
                        <img src={heart_img} alt={'heart'} className={'heart_16'}/>
                    </span>
                    </div>
                    : ''}
            </button>
        </div>
    );
}

export {ButtonOfLove};