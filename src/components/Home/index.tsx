"use client";
import { Fragment } from "react";
import Footer from "@/src/components/Footer";
import style from "./index.module.scss";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Navbar from "../Navbar";
import LoginForm from "../LoginForm";

const Home = (props: any) => {
  const { pageData } = props;

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
        <div className={style.form}>
          <LoginForm pageData={pageData} />
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
      <div className={style.testimonial}>
        <Card
          icon={pageData?.tesimonials?.icon}
          cardTitle={pageData?.tesimonials?.cardTitle}
          cardDescription={pageData?.tesimonials?.cardDescription}
          audioSrc={pageData?.tesimonials?.audioSrc}
          person={pageData?.tesimonials?.person}
          className={style.color}
        />
      </div>
      <div className={style.getStarted}>
        <h1>
          Your <span className={style.blue}>Hobby</span>, Your
          <span className={style.voilet}> Community...</span>
        </h1>
        <Button>Get Started</Button>
        <img src="/svg/hobby.svg" alt="" />
      </div>
      <Footer footerData={pageData} />
    </div>
  );
};

export default Home;
