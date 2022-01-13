/* eslint-disable  */
import { Center, Spinner, Wrap } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Center>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <UserCard
                key={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            ))}
          </Wrap>
        </Center>
      )}
    </>
  );
});
