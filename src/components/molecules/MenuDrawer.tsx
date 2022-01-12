import { memo, VFC } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  return (
    <Drawer
      placement="left"
      size="xs"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={props.onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={props.onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={props.onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
