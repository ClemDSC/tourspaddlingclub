import { Box } from "@chakra-ui/react";

import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { db } from "../../firebase-config";
import { set, ref } from "firebase/database";
import { uid } from "uid";

function FormArticle() {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const date = new Date();
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [altUrl, setAltUrl] = useState("");

  const postArticle = (e) => {
    e.preventDefault();
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
          onChange={console.log(editorRef.current)}
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
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button type="submit">Envoyer</button>
      </form>
    </Box>
  );
}

export default FormArticle;
