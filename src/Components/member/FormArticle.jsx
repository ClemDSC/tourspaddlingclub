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
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { db } from "../../firebase-config";
import { set, ref } from "firebase/database";
import { uid } from "uid";
import ButtonToDashboard from "./ButtonToDashbord";
import Article from "../actu/Article";

function FormArticle() {
  const editorRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Pour gérer la modal

  const [title, setTitle] = useState("");
  const date = new Date();
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [altUrl, setAltUrl] = useState("");
  const [previewData, setPreviewData] = useState({}); // Stocker les données pour la prévisualisation

  const postArticle = () => {
    const content = editorRef.current.getContent();
    const data = {
      id: uid(),
      title: title,
      date: date.toLocaleDateString({
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      link: link,
      imageUrl: imageUrl,
      altUrl: altUrl,
      content: content,
    };

    set(ref(db, "articles/" + data.id), data);

    setTitle("");
    setLink("");
    setImageUrl("");
    setAltUrl("");
    editorRef.current.setContent("");

    console.log("Article envoyé", data);
    onClose(); // Fermer la modale après l'envoi
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const content = editorRef.current.getContent();
    const previewData = {
      id: uid(), // Utilisé pour la clé
      title: title,
      date: date,
      link: link,
      imageUrl: imageUrl,
      altUrl: altUrl,
      content: content,
    };
    setPreviewData(previewData); // Stocker les données pour la prévisualisation
    onOpen(); // Ouvre la modal
  };

  return (
    <Box width={{ md: "60%" }} mx={{ md: "auto" }} py={{ md: "16px" }}>
      <ButtonToDashboard />
      <Box>
        <p>
          Le contenu de cet article sera publié dans la rubrique Blog /
          Actualités
        </p>
        <small>Tous les champs sont obligatoires.</small>
      </Box>
      <form className="form-article" onSubmit={handlePreview}>
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <small>Titre de l'article</small>
        <input
          type="text"
          placeholder="http://www..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <small>Lien de l'article à partager</small>
        <input
          type="text"
          placeholder="Url de l'image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <small>Url de l'image à partager</small>
        <input
          type="text"
          placeholder="Balise alt de l'image"
          value={altUrl}
          onChange={(e) => setAltUrl(e.target.value)}
        />
        <small>
          Important : la balise alt sert à rendre notre site accessible à tous.
        </small>

        <Editor
          apiKey="neho6pk99wwy7vw1crml34q6j491sdw2937zzfacemcco2ci"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Saisissez votre texte ...</p>"
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
            <Center my={4}>Prévisualisation de l'article</Center>
          </ModalHeader>
          <ModalBody>
            <Article article={previewData} />
          </ModalBody>
          <Center>
            <ModalFooter my={4}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Retour
              </Button>
              <Button colorScheme="blue" onClick={postArticle}>
                Envoyer
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FormArticle;
