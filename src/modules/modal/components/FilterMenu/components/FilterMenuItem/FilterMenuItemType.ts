export interface FilterMenuItemPropsType {
   itemText: string;
   placeholderText?: string;
   isSelect?: boolean;
   clearInputFunction?: (
      callback: React.Dispatch<React.SetStateAction<string>>,
   ) => void;
   fieldsValueFunction?: (callback: string) => void;
}
