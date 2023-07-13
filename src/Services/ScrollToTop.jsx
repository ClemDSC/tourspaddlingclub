import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ScrollToTop() {
  const scrollToBottom = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Button
    color='blue.300'
      variant="outline"
      rightIcon={<ArrowUpIcon />}
      onClick={scrollToBottom}
      width={{ md: 'fit-content'}}
      marginInline={'auto'}
    >
      Haut de page
    </Button>
  );
}
