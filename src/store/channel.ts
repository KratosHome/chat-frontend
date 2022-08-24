import { makeAutoObservable } from 'mobx';

class ChannelState {
   initialState = {
      id: 0,
      name: '',
      projectName: '',
      externalSubChatName: '',
      areParticipantsVisible: true,
      isInternal: true,
   };

   constructor() {
      makeAutoObservable(this);
   }

   chanel(state: any) {
      this.initialState = state;
   }
}

export default new ChannelState();
