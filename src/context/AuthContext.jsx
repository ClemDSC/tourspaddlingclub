import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

// Créer un contexte
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  return useContext(AuthContext);
}

// Fournisseur du contexte
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Écouter les changements d'état de l'authentification
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Déconnexion
  const logout = () => {
    signOut(auth).then(() => {
      console.log("Déconnexion réussie");
    });
  };

  const value = {
    authUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
