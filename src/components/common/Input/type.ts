export interface InputProps {
  label: string;
  type?:string;
  placeholder:string;
  name?:string;
  
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}