import { action, makeAutoObservable } from 'mobx';

function PopupState() {
   return makeAutoObservable(
      {
         isPopupOpen: false,
         setIsPopupOpen: undefined,
         modal(state: any) {
            this.isPopupOpen = state.isPopupOpen;
            this.setIsPopupOpen = state.setIsPopupOpen;
         },
      },
      { modal: action.bound },
   );
}

export default PopupState();
