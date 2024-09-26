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
  Divider,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { db } from "../../firebase-config";
import { set, ref } from "firebase/database";
import { uid } from "uid";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage"; // Importer les fonctions nécessaires
import ButtonToDashboard from "./ButtonToDashbord";
import Article from "../actu/Article";

function FormArticle() {
  const editorRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Pour gérer la modal

  const [title, setTitle] = useState("");
  const date = new Date();
  const [link, setLink] = useState("");
  const [imageFile, setImageFile] = useState(null); // Changer imageUrl en imageFile
  const [altUrl, setAltUrl] = useState("");
  const [previewData, setPreviewData] = useState({}); // Stocker les données pour la prévisualisation
  const navigate = useNavigate();
  const toast = useToast();

  const postArticle = async () => {
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
      altUrl: altUrl,
      content: content,
    };

    // Gestion de l'image
    if (imageFile) {
      const storage = getStorage();
      const storagePath = `images/blog/${imageFile.name}`;
      const storageReference = storageRef(storage, storagePath);

      try {
        // Upload de l'image
        await uploadBytes(storageReference, imageFile);
        const imageUrl = await getDownloadURL(storageReference); // Récupérer l'URL de l'image téléchargée

        data.imageUrl = imageUrl; // Ajouter l'URL de l'image aux données
      } catch (error) {
        // Gestion de l'erreur avec un toast d'erreur
        toast({
          title: "Erreur lors de l'upload de l'image.",
          description: `Une erreur s'est produite : ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return; // Ne pas continuer si l'upload échoue
      }
    }

    try {
      // Tentative de poster l'article dans la base de données
      await set(ref(db, "articles/" + data.id), data);

      // Réinitialisation des champs après succès
      setTitle("");
      setLink("");
      setAltUrl("");
      setImageFile(null); // Réinitialiser imageFile
      editorRef.current.setContent("");

      // Fermeture de la modale et affichage du toast de succès
      onClose();
      toast({
        title: "Contenu envoyé.",
        description: "Votre contenu a bien été enregistré.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Redirection après succès
      navigate("/dashboard");
    } catch (error) {
      // Gestion de l'erreur avec un toast d'erreur
      toast({
        title: "Erreur lors de l'envoi.",
        description: `Une erreur s'est produite : ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de l'envoi du contenu : ", error);
    }
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const content = editorRef.current.getContent();
    const previewData = {
      id: uid(), // Utilisé pour la clé
      title: title,
      date: date,
      link: link,
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : "", // Utiliser l'URL locale pour la prévisualisation
      altUrl: altUrl,
      content: content,
    };
    setPreviewData(previewData); // Stocker les données pour la prévisualisation
    onOpen(); // Ouvre la modal
  };

  return (
    <Box width={{ md: "60%" }} mx={{ md: "auto" }} py={{ md: "16px" }}>
      <ButtonToDashboard />
      <Box mb={4}>
        <p>
          Le contenu de cet article sera publié dans la rubrique Blog /
          Actualités
        </p>
        <small>Tous les champs sont obligatoires.</small>
      </Box>
      <Divider></Divider>
      <form className="form-article" onSubmit={handlePreview}>
        <label for="title">Titre de l'article :</label>
        <input
        id="title"
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="link">Lien de l'article à partager :</label>
        <small>Si aucun lien à partager, mettre : <strong>#</strong></small>
        <input
        id="link"
          type="text"
          placeholder="http://www..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {/* Champ pour uploader l'image */}
        <label for="image">Upload de l'image à partager :</label>
        <input
        id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])} // Mettre à jour imageFile avec le fichier sélectionné
        />

        <label for="balise-alt">
          Important : la balise alt décrit l'image qui sera affichée. Elle sert
          à rendre notre site accessible à tous.
        </label>
        <input
        id="balise-alt"
          type="text"
          placeholder="Balise alt de l'image"
          value={altUrl}
          onChange={(e) => setAltUrl(e.target.value)}
        />

        <label className="last-child">Détail de l'article :</label>
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

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
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
