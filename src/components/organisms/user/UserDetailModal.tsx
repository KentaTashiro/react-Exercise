import { memo, VFC } from "react";
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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: USer;
  // userName: string;
  // fullName: string;
  // mail: string;
  // tel: string;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
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
              <Input value={user?.username} isReadOnly></Input>

              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly></Input>

              <FormLabel>MAIL</FormLabel>
              <Input value={user?.email} isReadOnly></Input>

              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly></Input>
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
