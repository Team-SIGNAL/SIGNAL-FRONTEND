export interface TextAreaProps {
  label?: string;
  placeholder: string;
  name?: string;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
