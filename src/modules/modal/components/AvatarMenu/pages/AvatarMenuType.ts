export interface AvatarMenuPropsType {
   currentUserName: string;
   setIsModalAvatarOpen: React.Dispatch<React.SetStateAction<boolean>>;
   setIsModalSetStatusOpen: React.Dispatch<React.SetStateAction<boolean>>;
   setIsModalPreferencesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
