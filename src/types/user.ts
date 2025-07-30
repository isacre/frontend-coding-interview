import type React from "react";

export declare type User = {
  email: string;
  password: string;
};

export declare type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
