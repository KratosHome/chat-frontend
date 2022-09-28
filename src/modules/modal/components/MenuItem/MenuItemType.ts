export interface MenuItemType {
   isSubmenu?: boolean;
   itemText: string;
   onClick?: React.Dispatch<React.SetStateAction<boolean>>;
   setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
   timeValue?: number;
   isDelete?: boolean;
}
