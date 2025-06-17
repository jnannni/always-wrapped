import BodyTemplate from "./BodyTemplate";
import Button from "../Button";
import type { LastfmUser } from "@/app/types/lastfm";

export default function LastfmProfilePreview(props: {
  user: LastfmUser;
  className?: string;
  setState: (value: boolean) => void;
  setIsRightAccount: (value: boolean) => void;
}) {
  const { name, realname, country, image, registered } = props.user;
  console.log(props.user.image);
  const registrationDate = new Date(
    Number(registered.unixtime) * 1000
  ).toDateString();
  const img = (
    <img
      className="rounded-full md:w-[130px] md:h-[130px] bg-black"
      src={image[3]["#text"]}
    />
  );
  return (
    <BodyTemplate className={props.className} setState={props.setState}>
      <h3 className="text-center md:text-[30px] md:leading-7 md:mx-[60px]">
        Please confirm your account. Is it you?
      </h3>
      <div className="w-fit">
        <div className="flex items-center md:w-[400px] md:px-[25px] md:mt-[40px]">
          {img}
          <div className="flex flex-col md:ml-[30px]">
            <h5>{name}</h5>
            <h5>{country || "No country was set😔"}</h5>
            <h5>{registrationDate}</h5>
          </div>
        </div>
        <Button
          text="Yes, it is me!"
          className="py-[15px] rounded-[10px] bg-limegreen text-primary-black font-semibold w-full md:mt-[30px]"
          onClickHandler={() => {
            props.setIsRightAccount(true);
            props.setState(false);
          }}
        />
      </div>
    </BodyTemplate>
  );
}
