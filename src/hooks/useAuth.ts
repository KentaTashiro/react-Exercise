import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "入力されたユーザーIDは登録されていません",
              status: "error"
            });
          }
        })
        .catch((e) => {
          showMessage({
            title: "何らかのエラーによりログインできません",
            status: "error"
          });
        })
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
