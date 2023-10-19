export type SignInDataType = {
  account_id: string;
  password: string;
  role: "hospital" | "admin";
};

export type SignUpDataType = {
  name: string;
  phone: string;
  account_id: string;
  password: string;
};
