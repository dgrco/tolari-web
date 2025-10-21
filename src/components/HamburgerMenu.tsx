import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface INavLink {
  title: string;
  url: string;
}

interface Props {
  links: INavLink[];
}

export default function HamburgerMenu(props: Props) {
  const { links } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex">
      <div
        className="p-2 bg-[var(--backgroundSecondary)] rounded-lg hover:cursor-pointer hover:opacity-85"
        onClick={() => setIsExpanded(true)}
      >
        <MenuSvg />
      </div>
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex flex-col px-6 py-4 w-screen h-screen absolute top-0 right-0 bg-[var(--backgroundSecondary)]"
          >
            <div 
              className="w-fit self-end bg-[var(--background)] p-1 rounded-lg hover:cursor-pointer hover:opacity-85"
              onClick={() => setIsExpanded(false)}
            >
              <CloseSvg />
            </div>
            {links.map(link => (
              <div key={link.url} className="w-full px-2 py-6 text-4xl hover:cursor-pointer hover:opacity-60 transition-opacity">
                <Link 
                  href={link.url}
                  onClick={() => setIsExpanded(false)}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const MenuSvg = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
}

const CloseSvg = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
}
