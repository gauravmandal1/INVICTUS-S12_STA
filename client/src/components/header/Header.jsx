import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sakhi se</span>
        <span className="headerTitleLg">PeriodShiksha</span>
      </div>
      <img
        className="headerImage"
        src= "https://res.cloudinary.com/dt0nu7zgk/image/upload/v1645286326/WhatsApp_Image_2022-02-19_at_9.28.05_PM_mmw9gw.jpg"
        alt=""
      />
    </div>
  );
}
