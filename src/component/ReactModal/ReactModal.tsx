import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './ReactModal.scss';

const modalRootElement: HTMLElement | null = document.querySelector('#modal');

interface ModalType {
   isModalOpen: boolean;
   onClose: () => void;
}

export const ReactModal: React.FC<ModalType> = ({
   children,
   isModalOpen,
   onClose,
}) => {
   const element = useMemo(() => document.createElement('div'), []);

   useEffect(() => {
      if (isModalOpen) {
         modalRootElement?.appendChild(element);

         return () => {
            modalRootElement?.removeChild(element);
         };
      }
   });

   if (isModalOpen) {
      return createPortal(
         <div className='modal' onClick={onClose}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
               {children}
            </div>
         </div>,
         element
      );
   }

   return null;
};
