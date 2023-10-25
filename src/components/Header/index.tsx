import type { FC } from "react";
import { useState } from "react";
import { ROUTES } from "@src/utils/constants";
import useScrollDirection from "@src/hooks/useScrollDirection";
import classNames from "classnames";
import logoSenamite from "@src/assets/images/logoSenamite.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ITEM_NAV_LIST = [
  { route: ROUTES.homePage, name: "HOME" },
  { route: ROUTES.aboutUs, name: "ABOUT US" },
  { route: ROUTES.product, name: "PRODUCT" },
] as const;

const Header: FC = () => {
  const STYLE_MAPPING = {
    NAV_LINK_CLASS:
      "relative text-center text-gray hover:text-black-100 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black after:block after:content-[''] after:scale-x-0 after:hover:scale-x-100 after:duration-200 after:origin-left",
    ACTIVE_NAV_LINK_CLASS:
      "relative text-center text-black font-bold before:block before:content-[attr(data-text)] before:font-bold before:h-0 before:overflow-hidden hover:text-black-100 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black after:block after:content-['']",
    HOVER_NAV_CLASS:
      "inline-block text-center font-normal whitespace-nowrap hover:font-bold before:block before:content-[attr(data-text)] before:font-bold before:h-0 before:overflow-hidden",
    BURGER_TOP:
      "w-[0.5rem] h-[2px] bg-black rounded-full block transition-all duration-600 ease-out",
    ACTIVE_BURGER_TOP:
      "w-[0.5rem] h-[2px] bg-black rounded-full block transition-all duration-600 ease-out translate-x-[0.62rem]",
    BURGER_BOTTOM:
      "w-[0.75rem] h-[2px] bg-black rounded-full block transition-all duration-600 ease-out",
    ACTIVE_BURGER_BOTTOM:
      "w-[0.75rem] h-[2px] bg-black rounded-full block transition-all duration-600 ease-out translate-x-[0.35rem]",
  } as const;

  const router = useRouter();
  const [active, setActive] = useState(false);
  const scrollDirection = useScrollDirection();
  const handleActiveMenuBar = () => {
    setActive(!active);
  };
  const getPathName = (pathname: string) => {
    return `${pathname}/`;
  };

  return (
    <header
      className={classNames(
        "w-full z-[99999999] fixed transition-all ease-linear duration-300",
        scrollDirection === "down"
          ? "-top-24 bg-gray-900 backdrop-blur-md"
          : "top-0 bg-gray-900 backdrop-blur-md"
      )}
    >
      <div className="flex justify-between items-center w-full px-6 min-h-[6.1875rem]">
        <Link
          href={ROUTES.homePage}
          className="max-w-[9.0625rem] sm:max-w-[10.6875rem] lg:max-w-[14.625rem]"
        >
          <Image src={logoSenamite} alt="logo" />
        </Link>
        <div className="flex max-[1045px]:hidden">
          <ul className="flex justify-between items-center gap-14 mr-9">
            {ITEM_NAV_LIST.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.route}
                  className={STYLE_MAPPING.NAV_LINK_CLASS}
                >
                  <span
                    className={classNames(
                      {
                        [`${STYLE_MAPPING.HOVER_NAV_CLASS}`]:
                          getPathName(router.pathname) !== `${item.route}/` &&
                          !getPathName(router.pathname).startsWith(
                            `${item.route}/`
                          ),
                      },
                      {
                        [`${STYLE_MAPPING.ACTIVE_NAV_LINK_CLASS}`]:
                          getPathName(router.pathname) === `${item.route}/` ||
                          getPathName(router.pathname).startsWith(
                            `${item.route}/`
                          ),
                      }
                    )}
                    data-text={item.name}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex justify-center items-center min-[1045px]:hidden cursor-pointer gap-2"
          onClick={handleActiveMenuBar}
        >
          <p className="text-black-100 font-medium">MENU</p>
          <div className="bg-transparent gap-1 flex flex-col justify-center p-0 w-[1.125rem] h-[1.125rem] overflow-hidden">
            <span
              className={
                active
                  ? STYLE_MAPPING.BURGER_TOP
                  : STYLE_MAPPING.ACTIVE_BURGER_TOP
              }
            ></span>
            <span className="w-full h-[2px] bg-black rounded-full block"></span>
            <span
              className={
                active
                  ? STYLE_MAPPING.BURGER_BOTTOM
                  : STYLE_MAPPING.ACTIVE_BURGER_BOTTOM
              }
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
