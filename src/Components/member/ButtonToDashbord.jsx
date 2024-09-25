import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ButtonToDashbord() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <Button colorScheme="blue" onClick={handleNavigate}>
        ← Retour sur l'espace Membre
      </Button>
      <Stack h="32px"></Stack>
    </>
  );
}

export default ButtonToDashbord;
