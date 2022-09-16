export interface MenuItemType {
   isSubmenu?: boolean;
   itemText: string;
   onClick?: React.Dispatch<React.SetStateAction<boolean>>;
   setIsModalAvatarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
