export interface TextAreaProps {
  label?: string;
  placeholder: string;
  name?: string;
  height?: string;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
