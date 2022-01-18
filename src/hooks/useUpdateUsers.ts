import { useState, useCallback } from "react";

export const useUpdateUsers = () => {
  const [updId, setUpdId] = useState<number | null>(null);
  const [updName, setUpdName] = useState<string>("");
  const [updFullName, setUpdFullName] = useState<string>("");
  const [updMail, setUpdMail] = useState<string>("");
  const [updPhone, setUpdPhone] = useState<string>("");

  const updateUsers = useCallback(() => {
    console.log(`updId：${updId}`);
    console.log(`updName：${updName}`);
    console.log(`updFullName：${updFullName}`);
    console.log(`updMail：${updMail}`);
    console.log(`updPhone：${updPhone}`);
  }, [updId, updName, updFullName, updMail, updPhone]);

  return {
    setUpdId,
    setUpdName,
    updName,
    setUpdFullName,
    updFullName,
    setUpdMail,
    updMail,
    setUpdPhone,
    updPhone,
    updateUsers
  };
};
