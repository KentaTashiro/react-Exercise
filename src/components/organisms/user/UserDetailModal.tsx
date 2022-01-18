import { memo, useEffect, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Input,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

import { USer } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useUpdateUsers } from "../../../hooks/useUpdateUsers";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: USer;
  isAdmin: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin } = props;

  const {
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
  } = useUpdateUsers();

  useEffect(() => {
    setUpdId(user?.id);
    setUpdName(user?.username);
    setUpdFullName(user?.name);
    setUpdMail(user?.email);
    setUpdPhone(user?.phone);
  }, [user]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdName(event.target.value);
  };
  const onChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdFullName(event.target.value);
  };
  const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdMail(event.target.value);
  };
  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdPhone(event.target.value);
  };

  const onClickUpdate = () => {
    updateUsers();
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={updName}
                isReadOnly={!isAdmin}
                onChange={onChangeName}
              ></Input>

              <FormLabel>フルネーム</FormLabel>
              <Input
                value={updFullName}
                isReadOnly={!isAdmin}
                onChange={onChangeFullName}
              ></Input>

              <FormLabel>MAIL</FormLabel>
              <Input
                value={updMail}
                isReadOnly={!isAdmin}
                onChange={onChangeMail}
              ></Input>

              <FormLabel>TEL</FormLabel>
              <Input
                value={updPhone}
                isReadOnly={!isAdmin}
                onChange={onChangePhone}
              ></Input>
            </FormControl>
            {isAdmin && <PrimaryButton text="更新" onClick={onClickUpdate} />}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
