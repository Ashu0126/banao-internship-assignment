"use client";
import React, { Fragment, useState } from "react";
import Button from "../Button";
import style from "./index.module.scss";
import Input from "../Input";

const LoginForm = (props: any) => {
  const { pageData } = props;
  const [selectedTab, setSelectedTab] = useState(pageData?.form?.tab?.[0]);

  return (
    <div className={style.register}>
      <div className={style.tab}>
        {pageData?.form?.tab?.map((tab: string) => (
          <h5
            className={selectedTab === tab ? style.active : ""}
            key={tab}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </h5>
        ))}
      </div>
      <div className={style.btnContainer}>
        {pageData?.form?.connectWith?.buttons?.map(
          (button: { btnText: string; icon: string }) => (
            <Fragment key={button?.btnText}>
              <Button outline={true} btnIcon={button?.icon}>
                {button?.btnText}
              </Button>
            </Fragment>
          )
        )}
      </div>
      <h6>{pageData?.form?.connectWith?.text}</h6>
      <form>
        <div className={style.inputContainer}>
          {pageData?.form?.input?.map((item: string) => (
            <Fragment key={item}>
              <Input placeholder={item} />
            </Fragment>
          ))}
        </div>
        <div
          className={`${style.formOpt} ${
            selectedTab !== pageData?.form?.tab?.[0] && style.tc
          }`}
        >
          {selectedTab === pageData?.form?.tab?.[0] ? (
            <>
              <div className={style.remember}>
                <input type="checkbox" />
                {pageData?.form?.rememberText}
              </div>
              <div className={style.forget}>
                <img src={pageData?.form?.forgot?.forgotIcon} alt="" />
                {pageData?.form?.forgot?.forgotText}
              </div>
            </>
          ) : (
            <>
              <div className={style.checkstrength}>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Password strength</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: pageData?.form?.tctext }} />
            </>
          )}
        </div>
        <Button
          className={
            selectedTab === pageData?.form?.tab?.[0] && style.blackOutline
          }
          outline={selectedTab === pageData?.form?.tab?.[0]}
        >
          {selectedTab === pageData?.form?.tab?.[0]
            ? pageData?.form?.loginBtn
            : pageData?.form?.joinBtn}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
