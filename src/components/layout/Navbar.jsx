import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import NavIcon from "../ui/NavIcon";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { joinLinkProps } from "../../config/site";

const NAV_ITEMS = [
  { href: "#reality", labelKey: "reality" },
  { href: "#focus", labelKey: "focusMode" },
  { href: "#community", labelKey: "community" },
  { href: "#support", labelKey: "support" },
  { href: "#events", labelKey: "events" },
];

const joinClass =
  "bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition text-white font-medium text-center";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const join = joinLinkProps();

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800"
      aria-label={t("nav.primary")}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <div className="shrink-0">
          <NavIcon />
        </div>

        <div className="hidden md:flex gap-6 lg:gap-8 items-center flex-1 justify-end mr-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-300 hover:text-white transition text-sm lg:text-base"
            >
              {t(`nav.${item.labelKey}`)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <a {...join} className={joinClass}>
            {t("nav.join")}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-zinc-800 bg-black/95 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-300 hover:text-white transition py-1"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${item.labelKey}`)}
            </a>
          ))}
          <a
            {...join}
            className={`${joinClass} py-3`}
            onClick={() => setOpen(false)}
          >
            {t("nav.join")}
          </a>
        </div>
      ) : null}
    </nav>
  );
}
