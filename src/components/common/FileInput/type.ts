export type FileInputProps = {
  label?: string;
  name?: string;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
