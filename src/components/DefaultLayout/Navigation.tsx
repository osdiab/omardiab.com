import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { emphasisCss } from "src/styles/text";
import { pageSectionCss } from "src/styles/pageSection";
import { palette } from "src/styles/palette";
import { spacing } from "src/styles/spacing";
import { Link } from "src/components/Link";
import { useEffect, useState } from "react";

enum SiteSection {
  HOME = "Home",
  BLOG = "Blog",
}
function routeToSection(path: string): SiteSection | null {
  if (path === "/") {
    return SiteSection.HOME;
  }
  if (path.startsWith("/blog")) {
    return SiteSection.BLOG;
  }
  return null;
}
interface NavLink {
  section: SiteSection;
  href: string;
}
const navLinks: NavLink[] = [
  { section: SiteSection.HOME, href: "/" },
  { section: SiteSection.BLOG, href: "/blog" },
];
const FADE_HEIGHT = spacing.l;
const navCss = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: ${FADE_HEIGHT};
  background: linear-gradient(
    transparent 0,
    ${palette.background} ${FADE_HEIGHT}
  );
  pointer-events: none;
  > * {
    pointer-events: auto;
    ${pageSectionCss}
  }
  transition: transform 0.5s;
  transform: translateY(0);
`;
const hideNavCss = css`
  transform: translateY(100%);
`;

const navListCss = css`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-${spacing.xs} / 2) calc(-${spacing.m} / 2);

  > li {
    margin: ${spacing.xs} ${spacing.m};
  }
`;

function useScrollDirection() {
  const [scrollDelta, setScrollDelta] = useState<{
    lastScrollY: number;
    currentScrollY: number;
  }>();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">();

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentScrollY = window.scrollY;
      window.requestAnimationFrame(() => {
        setScrollDelta((prev) => ({
          lastScrollY: prev?.currentScrollY || currentScrollY,
          currentScrollY,
        }));
      });
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (!scrollDelta) {
      return;
    }
    if (scrollDelta.lastScrollY < scrollDelta.currentScrollY) {
      if (scrollDirection !== "down") {
        setScrollDirection("down");
      }
    } else if (scrollDirection !== "up") {
      setScrollDirection("up");
    }
  }, [scrollDelta, scrollDirection]);

  return scrollDirection;
}

export const Navigation = (): JSX.Element => {
  const router = useRouter();
  const currentSection = routeToSection(router.pathname);
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <nav css={[navCss, scrollDirection === "down" ? hideNavCss : undefined]}>
      <ul css={navListCss}>
        {navLinks.map(({ href, section }) => (
          <li
            key={section}
            css={section === currentSection ? emphasisCss : undefined}
          >
            <Link href={href}>{section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
