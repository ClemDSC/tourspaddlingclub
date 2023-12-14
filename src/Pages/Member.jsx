import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { Box, Button, Flex } from "@chakra-ui/react";

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
        </Box>
      ) : (
        <>
          <p>Vous n'êtes pas autorisé.</p>
          <button onClick={() => navigate("/")}>Retour à l'accueil</button>
        </>
      )}
    </div>
  );
}

export default Member;
