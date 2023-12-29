import { Box } from "@chakra-ui/react";

import { useState } from "react";

import { db } from "../../firebase-config";
import { set, ref } from "firebase/database";
import { uid } from "uid";

function FormArticle() {
  const [title, setTitle] = useState("");
  const date = new Date();
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [altUrl, setAltUrl] = useState("");
  const [content, setContent] = useState("");

  const postArticle = (e) => {
    e.preventDefault();
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
    setContent("");

    console.log("Article envoyé", data);
  };

  return (
    <Box width={{ md: "60%" }} mx={{ md: "auto" }} py={{ md: "16px" }}>
      <Box>
        <p>
          Le contenu de cet article sera publié dans la rubrique Blog /
          Actualités
        </p>
        <small>Tous les champs sont obligatoires.</small>
      </Box>
      <form className="form-article" onSubmit={postArticle}>
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="http://www..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url de l'image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Balise alt de l'image"
          value={altUrl}
          onChange={(e) => setAltUrl(e.target.value)}
        />
        <small>
          Important : la balise alt sert à rendre notre site accessible à tous.
        </small>

        <textarea
          placeholder="Contenu de l'article"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </Box>
  );
}

export default FormArticle;
