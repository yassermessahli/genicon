import { useContext } from "react";
import { LogoContext } from "../LogoContext";
import { useLocation } from "react-router-dom";
import LoginWhite from "@/media/illustrations/login-white.svg";

export default function useLogo() {
  const { logo, setLogo, loginLogo, isCustomLogo } = useContext(LogoContext);
  const { pathname } = useLocation();
  const forceWhite = pathname === "/" || pathname.startsWith("/login");

  const displayLogo = forceWhite ? LoginWhite : logo;
  const displayLoginLogo = forceWhite ? LoginWhite : loginLogo;

  return {
    logo: displayLogo,
    setLogo,
    loginLogo: displayLoginLogo,
    isCustomLogo,
  };
}
