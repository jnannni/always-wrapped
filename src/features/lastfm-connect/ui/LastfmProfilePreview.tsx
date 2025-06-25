import Button from "@/shared/ui/Button";
import type { LastfmUser } from "@/shared/types/lastfm";
import Image from "next/image";

export default function LastfmProfilePreview(props: {
  user: LastfmUser;
  setIsRightAccount: (value: boolean) => void;
  closeModal: (modalName: string) => void;
}) {
  const { name, country, image, registered } = props.user;
  const registrationDate = new Date(
    Number(registered.unixtime) * 1000
  ).toDateString();
  const img = (
    <Image
      className="rounded-full md:w-[130px] md:h-[130px] bg-black"
      src={image[3]["#text"]}
      alt="Lastfm profile image"
    />
  );
  return (
    <>
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
            props.closeModal("lastfm-preview");
          }}
        />
      </div>
    </>
  );
}
