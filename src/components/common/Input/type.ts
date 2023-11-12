export interface InputProps {
  label?: string;
  type?: string;
  placeholder: string;
  name?: string;
  min?: number;
  max?: number;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterSpace?: () => void;
}
