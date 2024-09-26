import { useAuth } from "../context/AuthContext";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

function Member() {
  const { authUser, logout } = useAuth(); // Utilisation du contexte Auth
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {authUser ? (
        <Box p={4}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
            alignItems={{ md: "center" }}
          >
            <p>
              Connecté(e) en tant que{" "}:{" "} 
              <strong>{authUser.email}</strong>
            </p>
            <Button colorScheme="linkedin" onClick={handleLogout}>
              Déconnexion
            </Button>
          </Flex>
          <Divider my={4} />
          <Outlet />
        </Box>
      ) : (
        <>
          <p>Vous n'êtes pas autorisé.</p>
          <Button
            colorScheme="linkedin"
            onClick={() => navigate("/")}
          >
            Retour à l'accueil
          </Button>
        </>
      )}
    </div>
  );
}

export default Member;
