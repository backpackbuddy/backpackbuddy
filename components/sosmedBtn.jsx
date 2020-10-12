import { useState } from 'react';
import {
    FloatingMenu,
    MainButton,
    ChildButton,
} from 'react-floating-button-menu';

import {
    ChatIcon,
    CloseIcon,
    WhatsappIcon,
} from '../components/icons';


function SosmedBtn(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        return setIsOpen((prevPros) => !prevPros);
    }

    return (
        <FloatingMenu
            slideSpeed={500}
            direction="up"
            spacing={8}
            isOpen={isOpen}
            style={{
                position: 'fixed',
                bottom: '1.5rem',
                right: '1.5rem',
                zIndex: 9999,
            }}
        >
            <MainButton
                iconResting={<ChatIcon width="25px" height="25px" />}
                iconActive={<CloseIcon width="25px" height="25px" fill="#cc0000" />}
                onClick={toggleIsOpen}
                size={56}
                style={{ backgroundColor: 'white' }}
            />
            <ChildButton 
                icon={<WhatsappIcon width="20px" height="20px" />}
                size={50}
                backgroundColor="#fff"
                onClick={() => document.location.href="/"}
            />
        </FloatingMenu>
    );
}

export default SosmedBtn;
