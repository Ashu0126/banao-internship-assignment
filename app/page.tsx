import Footer from "@/src/components/Footer";
import style from "./page.module.scss";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import pageData from "./../src/data/footer.json";
import { Fragment } from "react";

const Page = () => {
  return (
    <div>
      <div className={style.cards}>
        {pageData?.cards?.map((card) => (
          <Fragment key={card?.cardTitle}>
            <Card
              cardTitle={card?.cardTitle}
              cardDescription={card?.cardDescription}
              icon={card?.icon}
              btnText={card?.btnText}
            />
          </Fragment>
        ))}
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

export default Page;
