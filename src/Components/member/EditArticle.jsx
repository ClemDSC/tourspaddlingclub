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
import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { db } from "../../firebase-config";
import { ref, set, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import ButtonToDashboard from "./ButtonToDashbord";
import Article from "../actu/Article";
import { uid } from "uid";

function EditArticle() {
  const editorRef = useRef(null);
  const { id } = useParams(); // Récupérer l'ID de l'article depuis l'URL
  const { isOpen, onOpen, onClose } = useDisclosure(); // Pour gérer la modal

  const [article, setArticle] = useState({});
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [altUrl, setAltUrl] = useState("");
  const [previewData, setPreviewData] = useState({}); // Stocker les données pour la prévisualisation
  const [editorReady, setEditorReady] = useState(false);
  
  useEffect(() => {
    const articleRef = ref(db, "articles/" + id);
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArticle(data);
        setTitle(data.title);
        setLink(data.link);
        setImageUrl(data.imageUrl);
        setAltUrl(data.altUrl);
        if (editorRef.current && editorReady) {
          editorRef.current.setContent(data.content);
        }
      }
    });
  }, [id, editorReady]); // Ajoutez editorReady comme dépendance
  
  

  const postArticle = () => {
    const content = editorRef.current.getContent();
    const data = {
      id: id, // Utiliser l'ID existant pour mettre à jour l'article
      title: title,
      link: link,
      imageUrl: imageUrl,
      altUrl: altUrl,
      content: content,
    };

    set(ref(db, "articles/" + data.id), data);

    console.log("Article modifié", data);
    onClose(); // Fermer la modale après l'envoi
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const content = editorRef.current.getContent();
    const previewData = {
      id: id,
      title: title,
      link: link,
      imageUrl: imageUrl,
      altUrl: altUrl,
      content: content,
      date: new Date().toISOString(),
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
          onInit={(_evt, editor) => {
            editorRef.current = editor;
            setEditorReady(true); // L'éditeur est prêt
          }}
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
        <ModalContent maxWidth="1100px">
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
                Enregistrer les modifications
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditArticle;
