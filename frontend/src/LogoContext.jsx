import { createContext, useEffect, useState } from "react";
import Genicon from "./media/logo/genicon.png";
import GeniconDark from "./media/logo/genicon-dark.png";
import DefaultLoginLogoLight from "./media/illustrations/login-dark.svg";
import DefaultLoginLogoDark from "./media/illustrations/login-white.svg";
import System from "./models/system";

export const REFETCH_LOGO_EVENT = "refetch-logo";
export const LogoContext = createContext();

export function LogoProvider({ children }) {
  const [logo, setLogo] = useState("");
  const [loginLogo, setLoginLogo] = useState("");
  const [isCustomLogo, setIsCustomLogo] = useState(false);
  const DefaultLoginLogo =
    localStorage.getItem("theme") !== "default"
      ? DefaultLoginLogoDark
      : DefaultLoginLogoLight;

  async function fetchInstanceLogo() {
    try {
      const { isCustomLogo, logoURL } = await System.fetchLogo();
      if (logoURL) {
        setLogo(logoURL);
        setLoginLogo(isCustomLogo ? logoURL : DefaultLoginLogo);
        setIsCustomLogo(isCustomLogo);
      } else {
        localStorage.getItem("theme") !== "default"
          ? setLogo(GeniconDark)
          : setLogo(Genicon);
        setLoginLogo(DefaultLoginLogo);
        setIsCustomLogo(false);
      }
    } catch (err) {
      localStorage.getItem("theme") !== "default"
        ? setLogo(GeniconDark)
        : setLogo(Genicon);
      setLoginLogo(DefaultLoginLogo);
      setIsCustomLogo(false);
      console.error("Failed to fetch logo:", err);
    }
  }

  useEffect(() => {
    fetchInstanceLogo();
    window.addEventListener(REFETCH_LOGO_EVENT, fetchInstanceLogo);
    return () => {
      window.removeEventListener(REFETCH_LOGO_EVENT, fetchInstanceLogo);
    };
  }, []);

  return (
    <LogoContext.Provider value={{ logo, setLogo, loginLogo, isCustomLogo }}>
      {children}
    </LogoContext.Provider>
  );
}
