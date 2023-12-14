import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        onClose();
        navigate("/member");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       console.log("userCredential", userCredential);
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme='linkedin' type="submit">Connexion</Button>
            </form>

            {/* <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Connexion</button>
            </form> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
