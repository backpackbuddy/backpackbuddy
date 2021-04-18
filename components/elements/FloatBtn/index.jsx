import { useState } from 'react';
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';

// Icons
import { ChatIcon, CloseIcon, WhatsappIcon, MessengerIcon } from '../Icons';

import { whatsappLink, messengerLink } from '../../../constants/sosmed-links';

function ContactBtn() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    return setIsOpen(prevPros => !prevPros);
  }

  return (
    <FloatingMenu
      direction="up"
      isOpen={isOpen}
      slideSpeed={500}
      spacing={8}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 99999,
      }}
    >
      <MainButton
        background="white"
        iconResting={<ChatIcon width="25px" height="25px" />}
        iconActive={<CloseIcon width="25px" height="25px" fill="#cc0000" />}
        onClick={toggleIsOpen}
        size={56}
      />
      <ChildButton
        background="white"
        icon={
          <a href={whatsappLink}>
            <WhatsappIcon width="20px" height="20px" />
          </a>
        }
        size={50}
      />
      <ChildButton
        background="white"
        icon={
          <a href={messengerLink} target="_blank" rel="noreferrer">
            <MessengerIcon width="20px" height="20px" />
          </a>
        }
        size={50}
      />
    </FloatingMenu>
  );
}

export default ContactBtn;
