"use client";
import React, { Fragment, useState } from "react";
import Button from "../Button";
import style from "./index.module.scss";
import Input from "../Input";

const LoginForm = (props: any) => {
  const { formData } = props;
  const [selectedTab, setSelectedTab] = useState(formData?.tab?.[0]);

  return (
    <div className={style.register}>
      <div className={style.tab}>
        {formData?.tab?.map((tab: string) => (
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
        {formData?.connectWith?.buttons?.map(
          (button: { btnText: string; icon: string }) => (
            <Fragment key={button?.btnText}>
              <Button outline={true} btnIcon={button?.icon}>
                {button?.btnText}
              </Button>
            </Fragment>
          )
        )}
      </div>
      <h6>{formData?.connectWith?.text}</h6>
      <form>
        <div className={style.inputContainer}>
          {formData?.input?.map((item: string) => (
            <Fragment key={item}>
              <Input placeholder={item} />
            </Fragment>
          ))}
        </div>
        <div
          className={`${style.formOpt} ${
            selectedTab !== formData?.tab?.[0] && style.tc
          }`}
        >
          {selectedTab === formData?.tab?.[0] ? (
            <>
              <div className={style.remember}>
                <input type="checkbox" />
                {formData?.rememberText}
              </div>
              <div className={style.forget}>
                <img src={formData?.forgot?.forgotIcon} alt="" />
                {formData?.forgot?.forgotText}
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
              <p dangerouslySetInnerHTML={{ __html: formData?.tctext }} />
            </>
          )}
        </div>
        <Button
          className={selectedTab === formData?.tab?.[0] && style.blackOutline}
          outline={selectedTab === formData?.tab?.[0]}
        >
          {selectedTab === formData?.tab?.[0]
            ? formData?.loginBtn
            : formData?.joinBtn}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
