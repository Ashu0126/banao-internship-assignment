"use client";
import { Fragment, useState } from "react";
import Footer from "@/src/components/Footer";
import style from "./index.module.scss";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Input from "@/src/components/Input";
import Navbar from "../Navbar";

const Home = (props: any) => {
  const { pageData } = props;

  const [selectedTab, setSelectedTab] = useState(pageData?.form?.tab?.[0]);

  return (
    <div className={style.container}>
      <Navbar navData={pageData?.navbar} />
      <div className={style.heroBanner}>
        <div className={style.about}>
          <h1
            dangerouslySetInnerHTML={{ __html: pageData?.heroContent?.heading }}
          />
          <p>{pageData?.heroContent?.content}</p>
          <p>{pageData?.heroContent?.subContent}</p>
        </div>
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
                  <p
                    dangerouslySetInnerHTML={{ __html: pageData?.form?.tctext }}
                  />
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
      </div>
      <div className={style.cards}>
        {pageData?.cards?.map(
          (card: {
            cardTitle: string;
            cardDescription: string;
            icon: string;
            btnText: string;
          }) => (
            <Fragment key={card?.cardTitle}>
              <Card
                cardTitle={card?.cardTitle}
                cardDescription={card?.cardDescription}
                icon={card?.icon}
                btnText={card?.btnText}
              />
            </Fragment>
          )
        )}
      </div>
      <div className={style.addOwn}>
        <Card
          icon={pageData?.addOwn?.icon}
          cardTitle={pageData?.addOwn?.cardTitle}
          cardDescription={pageData?.addOwn?.cardDescription}
          btnText={pageData?.addOwn?.btnText}
        />
      </div>
      {/* <div className={style.testimonial}></div>
      <div className={style.getStarted}>
        <h1>
          Your <span className={style.blue}>Hobby</span>, Your
          <span className={style.volient}> Community...</span>
        </h1>
        <Button>Get Started</Button>
      </div> */}
      <Footer footerData={pageData} />
    </div>
  );
};

export default Home;
