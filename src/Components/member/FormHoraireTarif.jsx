import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { db } from "../../firebase-config";
import { remove, set, ref, onValue } from "firebase/database";
import { uid } from "uid";
import ButtonToDashboard from "./ButtonToDashbord";
import { useNavigate } from "react-router-dom";

function FormHoraireTarif() {
  const editorRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [previewData, setPreviewData] = useState({});
  const [loadedContent, setLoadedContent] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const postContent = () => {
    const content = editorRef.current.getContent();
    const data = {
      id: uid(),
      content: content,
    };

    remove(ref(db, "horaires-tarifs"));

    set(ref(db, "horaires-tarifs/" + data.id), data)
      .then(() => {
        console.log("Contenu envoyé", data);
        editorRef.current.setContent("");
        onClose();
        toast({
            title: "Contenu envoyé.",
            description: "Votre contenu a bien été enregistré.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du contenu : ", error.message);
        toast({
            title: "Erreur.",
            description: "Une erreur est survenue lors de l'envoi du contenu.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
      });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const content = editorRef.current.getContent();
    const previewData = {
      id: uid(), // Utilisé pour la clé
      content: content,
    };
    setPreviewData(previewData); // Stocker les données pour la prévisualisation
    onOpen(); // Ouvre la modal
  };

  useEffect(() => {
    const contentRef = ref(db, "horaires-tarifs"); // Chemin vers la collection
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Récupérer le dernier contenu posté (par exemple, le plus récent)
        const latestEntry = Object.values(data).pop();
        setLoadedContent(latestEntry.content);

        // Injecter le contenu chargé dans l'éditeur TinyMCE
        if (editorRef.current) {
          editorRef.current.setContent(latestEntry.content);
        }
      }
    });
  }, []);

  return (
    <Box width={{ md: "60%" }} mx={{ md: "auto" }} py={{ md: "16px" }}>
      <ButtonToDashboard />
      <Box mb={4}>
        <small>Rappel : </small>
        <p>
          Ce contenu sera affiché à 2 endroits : sur la page d'accueil, ainsi
          que dans Le CLub / Rejoignez-nous.
        </p>
      </Box>
      <form className="form-article" onSubmit={handlePreview}>
        <Editor
          apiKey="neho6pk99wwy7vw1crml34q6j491sdw2937zzfacemcco2ci"
          onInit={(_evt, editor) => {
            editorRef.current = editor;
            if (loadedContent) {
              editor.setContent(loadedContent);
            }
          }}
          initialValue={
            loadedContent !== ""
              ? loadedContent
              : "<p>Saisissez votre texte ...</p>"
          }
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <Center>
          <Button width={"fit-content"} mt={4} colorScheme="blue" type="submit">
            Prévisualiser
          </Button>
        </Center>
      </form>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center my={4}>Prévisualisation des horaires & tarifs</Center>
          </ModalHeader>
          <ModalBody>
            <Box
              dangerouslySetInnerHTML={{ __html: previewData.content }}
              p={4}
              border="1px solid #e2e8f0"
              borderRadius="md"
              bg="gray.50"
            />
          </ModalBody>
          <Center>
            <ModalFooter my={4}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Retour
              </Button>
              <Button colorScheme="blue" onClick={postContent}>
                Envoyer
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FormHoraireTarif;
