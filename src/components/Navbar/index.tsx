import React from "react";
import style from "./index.module.scss";
import Button from "../Button";
import Input from "../Input";

const Navbar = (props: any) => {
  const { navData } = props;

  return (
    <nav className={style.navbar}>
      <img src={navData?.logo} alt="" />
      <div className={style.searchInput}>
        <Input placeholder={navData?.searchBar?.placeholder} />
        <Button>S</Button>
      </div>
      <div className={style.navOpt}>
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
    </nav>
  );
};

export default Navbar;
