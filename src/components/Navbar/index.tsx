"use client";
import React, { useState } from "react";
import style from "./index.module.scss";
import Button from "../Button";
import Input from "../Input";
import LoginForm from "../LoginForm";

const Navbar = (props: any) => {
  const { navData, formData } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={style.navbar}>
      <a href={navData?.logo?.link}>
        <img src={navData?.logo?.icon} alt="" />
      </a>
      <div className={style.searchInput}>
        <Input placeholder={navData?.searchBar?.placeholder} />
        <Button btnIcon={"/svg/search.svg"}></Button>
      </div>
      <div className={`${style.navOpt} ${open && style.active}`}>
        <img
          className={style.close}
          onClick={handleClick}
          src={navData?.closeIcon}
          alt=""
        />
        <div className={style.form}>
          <LoginForm formData={formData} />
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
        <img src={navData?.searchIcon} alt="" />
        <img src={navData?.navTab?.[3]?.icon} alt="" />
        <img
          className={style.menu}
          onClick={handleClick}
          src={navData?.menuIcon}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
