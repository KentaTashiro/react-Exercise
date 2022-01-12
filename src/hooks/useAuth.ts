import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("入力されたユーザーIDは登録されていません");
          }
        })
        .catch((e) => alert("何らかのエラーによりログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
