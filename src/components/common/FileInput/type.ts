export type FileInputProps = {
  label?: string;
  name?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
