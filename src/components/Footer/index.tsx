import React, { Fragment } from "react";
import style from "./index.module.scss";
import Input from "../Input";
import Button from "../Button";

const Footer = (props: any) => {
  const { footerData } = props;

  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        {footerData?.footer?.links?.map(
          (item: { heading: string; tabs: string[] }) => (
            <div key={item?.heading}>
              <h4>{item?.heading}</h4>
              <ul className={style.footerTabs}>
                {item?.tabs?.map((tab: string) => (
                  <li key={tab}>{tab}</li>
                ))}
              </ul>
            </div>
          )
        )}
        <div className={style.contact}>
          <div className={style.social}>
            <h4>{footerData?.footer?.social?.heading}</h4>
            <ul>
              {footerData?.footer?.social?.links?.map(
                (item: string, index: number) => (
                  <li key={`_${index}`}>
                    <img src={item} alt="" />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className={style.referral}>
            <h4>{footerData?.footer?.referral?.heading}</h4>
            <div className={style.searchInput}>
              <Input
                placeholder={footerData?.footer?.referral?.inputPlaceHolder}
              />
              <Button>{footerData?.footer?.referral?.btnText}</Button>
            </div>
          </div>
        </div>
      </div>
      <p className={style.copyright}>&copy; {footerData?.copyright}</p>
    </div>
  );
};

export default Footer;
