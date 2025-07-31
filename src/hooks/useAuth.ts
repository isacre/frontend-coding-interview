import { useCallback } from "react";
import type { User } from "../types/user";

const USER_KEY = "user";

export default function useAuth() {
  //useCallback for future useCases where authenticate is passed down as a prop to a child component
  const authenticate = useCallback(async (user: User) => {
    if (user.email && user.password) {
      const promise = new Promise((resolve, reject) => {
        const userFromLocalStorage = localStorage.getItem(USER_KEY);
        if (!userFromLocalStorage) {
          localStorage.setItem(USER_KEY, JSON.stringify(user));
          window.alert(
            "New account detected, your user has been saved to our database"
          );
          resolve(true);
        } else {
          const userFromLocalStorageObject = JSON.parse(userFromLocalStorage);
          if (
            userFromLocalStorageObject.email === user.email &&
            userFromLocalStorageObject.password === user.password
          ) {
            resolve(true);
          } else {
            reject(new Error("Invalid credentials"));
          }
        }
      });
      return promise;
    }
  }, []);

  return { authenticate };
}
