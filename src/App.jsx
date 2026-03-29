import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Landing from "./pages/Landing";

function DocumentHeadSync() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith("es")
      ? "es"
      : "en";
    document.title = t("meta.title");

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.ogDescription"));
  }, [i18n.language, t]);

  return null;
}

export default function App() {
  return (
    <>
      <DocumentHeadSync />
      <Landing />
    </>
  );
}
