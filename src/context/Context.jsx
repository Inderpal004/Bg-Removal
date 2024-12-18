import { useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export const Context = createContext();

const ContextProvider = (props) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const clipdropKey = import.meta.env.VITE_CLIPDROP_KEY

  const removeBg = async (uploadedImage) => {
    try {
      if (!isSignedIn) {
        toast.error("Please sign in to use this feature",  {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
        return openSignIn();
      }

      setImage(URL.createObjectURL(uploadedImage));
      setResultImage(false);
      setLoading(true);
      navigate("/result");

      const form = new FormData();
      form.append("image_file", uploadedImage);

      const response = await fetch("https://clipdrop-api.co/remove-background/v1", {
        method: "POST",
        headers: {
          "x-api-key": clipdropKey,
        },
        body: form,
      });

      if (response.ok) {
        const buffer = await response.arrayBuffer();
        const blob = new Blob([buffer], { type: "image/png" });
        setResultImage(URL.createObjectURL(blob));
      } else {
        console.error("Error removing background:", response.statusText);
        toast.error("Failed to remove the background. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Remove Bg Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const contextValue = { image, resultImage, loading, removeBg };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
