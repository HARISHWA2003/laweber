import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "../firebase/config";
import Image from "next/image";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="bg-[#1e2122] h-screen">
          <div className="flex justify-center items-center align-middle">
            <Image
              src="../assets/loading.svg"
              width={500}
              height={500}
              alt="Picture of the loading"
            />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
