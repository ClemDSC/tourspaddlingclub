import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // État pour stocker le message d'erreur
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onClose();
        navigate("/member");
      })
      .catch((error) => {
        setError("Les identifiants sont incorrects. Veuillez réessayer."); // Définir le message d'erreur
        console.log("error", error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} p={2}>
        <FaUserCircle />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Espace membre</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme="linkedin" type="submit">
                Connexion
              </Button>
              {/* Affichage du message d'erreur */}
              {error && (
                <Text color="red.500" mt={2}>
                  {error}
                </Text>
              )}
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
