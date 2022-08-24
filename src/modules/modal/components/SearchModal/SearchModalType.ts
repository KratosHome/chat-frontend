export type SearchModalType = {
   chanelName: string | undefined;
   onClose: (value: boolean) => void;
   modalFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
