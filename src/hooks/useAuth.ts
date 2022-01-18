import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin: boolean = res.data.id === 10;
            setLoginUser({ ...res.data, isAdmin });
            setLoading(false);
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "入力されたユーザーIDは登録されていません",
              status: "error"
            });
            setLoading(false);
          }
        })
        .catch((e) => {
          showMessage({
            title: "何らかのエラーによりログインできません",
            status: "error"
          });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
