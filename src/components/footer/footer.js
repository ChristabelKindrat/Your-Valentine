import React from 'react';
import {TelegramShareButton} from "react-share";

import {linkedin, github, telegram} from "../../asserts";
import './footer.style.css';
import '../../styles/media.css';

function Footer() {
    return (
        <div className={'wrapper_asserts'}>
            <TelegramShareButton url={"https://your-valentine-ochre.vercel.app/"}>
                <img src={telegram}
                     alt={'telegram'}
                     width={40}
                     height={40}
                     className={'copy_url svg_img'}
                />
            </TelegramShareButton>
            <a href="https://github.com/ChristabelKindrat">
                <img src={github}
                     alt={'github'}
                     width={45}
                     height={45}
                     className={'svg_img'}
                />
            </a>
            <a href="https://www.linkedin.com/in/khrystyna-kindrat-a20a41188/">
                <img src={linkedin}
                     alt={'linkedin'}
                     width={45}
                     height={45}
                     className={'svg_img'}
                />
            </a>
        </div>
    );
}
export {Footer};