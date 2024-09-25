import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { storage } from "../../firebase-config"; // Ajustez le chemin en fonction de votre structure de fichiers
import { ref, uploadBytes } from "firebase/storage";

function FileUploadModal({document, route}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (fileType !== "application/pdf") {
        alert("Veuillez sélectionner un fichier au format PDF.");
        setFile(null);
        setPreviewUrl(null);
        return;
      }
      setFile(selectedFile);
      // Créer une URL de prévisualisation pour le fichier
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `documents/${route}/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      console.log("Fichier uploadé avec succès !");
      // Afficher un message de confirmation
      toast({
        title: "Succès",
        description: "Le fichier a été uploadé avec succès.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Erreur lors de l'upload du fichier :", error);
      // Afficher un message d'erreur
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'upload du fichier.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null); // Réinitialiser l'aperçu
      onClose(); // Fermer la modale après l'upload
    }
  };

  return (
    <>
      <Button onClick={onOpen}>{document}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mise à jour du : {document}</ModalHeader>
          <ModalBody>
            <Input type="file" accept=".pdf" onChange={handleFileChange} />
            {previewUrl && (
              <div>
                <Text mt={4}>Aperçu :</Text>
                {file && file.type === "application/pdf" ? (
                  <iframe
                    src={previewUrl}
                    style={{ width: "100%", height: "400px" }}
                    title="Aperçu PDF"
                  />
                ) : (
                  <Image src={previewUrl} alt="Prévisualisation" maxH="200px" />
                )}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue" onClick={handleUpload}>
              Uploader
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FileUploadModal;
