import { memo, VFC } from "react";
import { Box, Image, Stack, Text, WrapItem } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  return (
    <WrapItem mx="auto">
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        onClick={() => props.onClick(props.id)}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={props.imageUrl}
            alt={props.userName}
            m="auto"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          />
          <Text fontSize="lg" fontWeight="bold">
            {props.userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {props.fullName}
          </Text>
        </Stack>
      </Box>
    </WrapItem>
  );
});
