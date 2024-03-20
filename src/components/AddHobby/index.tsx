import Navbar from "@/src/components/Navbar";
import style from "./index.module.scss";
import Card from "@/src/components/Card";
import { Fragment } from "react";

const AddHobby = (props: any) => {
  const { pageData } = props;
  return (
    <div className={style.addSection}>
      <Navbar navData={pageData?.navbar} formData={pageData?.form} />
      <div className={style.cardSection}>
        <h4>
          <img src={pageData?.addOwn?.icon} alt="" />
          {pageData?.addOwn?.cardTitle}
        </h4>
        <div className={style.cards}>
          {pageData?.cards?.map(
            (card: {
              cardTitle: string;
              cardDescription: string;
              icon: string;
            }) => {
              return (
                <Fragment key={card?.cardTitle}>
                  <Card
                    cardTitle={card?.cardTitle}
                    cardDescription={card?.cardDescription}
                    icon={card?.icon}
                    className={style[card?.cardTitle?.toLowerCase()]}
                  />
                </Fragment>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default AddHobby;
