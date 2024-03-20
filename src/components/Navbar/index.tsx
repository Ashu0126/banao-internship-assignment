import React, { useState } from "react";
import style from "./index.module.scss";
import Button from "../Button";
import Input from "../Input";
import LoginForm from "../LoginForm";
import pageData from "./../../data/main.json";

const Navbar = (props: any) => {
  const { navData } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={style.navbar}>
      <img src={navData?.logo} alt="" />
      <div className={style.searchInput}>
        <Input placeholder={navData?.searchBar?.placeholder} />
        <Button>S</Button>
      </div>
      <div className={`${style.navOpt} ${open && style.active}`}>
        <img
          className={style.close}
          onClick={handleClick}
          src={"/svg/close.svg"}
          alt=""
        />
        <div className={style.form}>
          <LoginForm pageData={pageData} />
        </div>
        <ul className={style.navItems}>
          {navData?.navTab?.map((tab: any, index: number) => (
            <li key={`_${index}`}>
              <img src={tab?.icon} alt="" />
              {tab?.text && <h5>{tab?.text}</h5>}
              {tab?.dropDownIcon && (
                <img className={style.drop} src={tab?.dropDownIcon} alt="" />
              )}
              {tab?.subMenu && (
                <ul className={style.navList}>
                  {tab?.subMenu?.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Button className={style.signInBtn} outline={true}>
          {navData?.signIn}
        </Button>
      </div>
      <div className={style.extra}>
        <img src="/svg/search.svg" alt="" />
        <img src="/svg/bell.svg" alt="" />
        <img
          className={style.menu}
          onClick={handleClick}
          src="/svg/menu.svg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
