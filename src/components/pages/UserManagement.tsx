/* eslint-disable  */
import { Center, Spinner, Wrap, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { User } from "../../types/api/user";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectUser } = useSelectUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(selectUser);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      onOpen();
    },
    [users, onSelectUser, onOpen]
  );

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            ))}
          </Wrap>
          <UserDetailModal
            isOpen={isOpen}
            onClose={onClose}
            user={selectUser}
          />
        </>
      )}
    </>
  );
});
