import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import FormArticle from "../Components/member/FormArticle";

function Member() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setAuthUser(authUser);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Déconnexion réussie");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
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
              Connectée en tant que{" "}
              <strong>{authUser.email}</strong>
            </p>
            <Button colorScheme='linkedin' onClick={handleLogout}>Déconnexion</Button>
          </Flex>
          <Divider my={4} />
          <FormArticle />
        </Box>
      ) : (
        <>
          <p>Vous n'êtes pas autorisé.</p>
          <Button colorScheme="linkedin" onClick={() => navigate("/")}>Retour à l'accueil</Button>
        </>
      )}
    </div>
  );
}

export default Member;
