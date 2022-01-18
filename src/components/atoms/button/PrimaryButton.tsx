import { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { text, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      disabled={disabled}
    >
      {text}
    </Button>
  );
});
