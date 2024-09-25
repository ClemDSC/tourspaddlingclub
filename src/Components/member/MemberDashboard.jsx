import {
  Box,
  Flex,
  Button,
  Heading,
  Stack,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { ref, onValue, remove } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import FileUploadModal from "./FileUploadModal";

function MemberDashboard() {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const toast = useToast();

  const navigate = useNavigate();
  const handlePublishArticle = () => {
    navigate("/dashboard/post-article"); // Redirige vers le formulaire d'article
  };

  useEffect(() => {
    // Récupérer les articles depuis Firebase
    const articleRef = ref(db, "articles/");
    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArticles(Object.values(data));
      }
    });
  }, []);

  const handleDelete = (articleId) => {
    // Supprimer l'article de Firebase
    const articleRef = ref(db, "articles/" + articleId);
    remove(articleRef)
      .then(() => {
        toast({
          title: "Article supprimé.",
          description: "L'article a été supprimé avec succès.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setArticles(articles.filter((article) => article.id !== articleId));
        setIsModalOpen(false); // Fermer la modale après suppression
      })
      .catch((error) => {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de la suppression.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const openModal = (articleId) => {
    setArticleToDelete(articleId);
    setIsModalOpen(true);
  };

  return (
    <Box width={{ md: "60%" }} mx={{ md: "auto" }} py={{ md: "16px" }}>
      <Heading mb={6}>Bienvenue sur votre espace membre</Heading>

      <Stack spacing={4}>
        <Flex gap={4} wrap={'wrap'}>
          <Button
            width={"fit-content"}
            colorScheme="blue"
            onClick={handlePublishArticle}
          >
            Publier un nouvel article
          </Button>
          <FileUploadModal document={"Bulletin d'adhésion"} route={"adhesion"} />
          <FileUploadModal document={"Formulaire de prêt"} route={"pret"} />
        </Flex>

        {/* Liste des articles existants */}
        <Heading size="md" mt={8}>
          Vos articles
        </Heading>
        {articles.length > 0 ? (
          articles.map((article) => (
            <Box
              key={article.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              mb={4}
            >
              <Text fontWeight="bold">{article.title}</Text>
              <Text>{article.date}</Text>
              <Stack direction="row" spacing={4} mt={4}>
                <Link to={`/dashboard/edit-article/${article.id}`}>
                  <Button colorScheme="yellow">Modifier</Button>
                </Link>
                <Button colorScheme="red" onClick={() => openModal(article.id)}>
                  Supprimer
                </Button>
              </Stack>
            </Box>
          ))
        ) : (
          <Text>Aucun article trouvé.</Text>
        )}
      </Stack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation de suppression</ModalHeader>
          <ModalBody>
            <Text>
              Êtes-vous sûr de vouloir supprimer cet article ? Cette action est
              définitive.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsModalOpen(false)} mr={3}>
              Annuler
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleDelete(articleToDelete)}
            >
              Supprimer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MemberDashboard;
