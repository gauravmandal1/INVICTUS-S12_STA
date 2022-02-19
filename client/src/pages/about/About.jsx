import './about.css';
import Header from "../../components/header/Header";

export default function About() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sakhi se</span>
        <span className="headerTitleLg">PeriodShiksha</span>
      </div>
      <img
        className="headerImg"
        src= "https://res.cloudinary.com/dt0nu7zgk/image/upload/v1645287432/WhatsApp_Image_2022-02-19_at_9.46.45_PM_lhe6ma.jpg"
        alt=""
      />
    </div>
    <div>
        <p className='title'>About Us</p>
    </div>
    <div className='about'> 
      <p className='info'>
      We have created a blog forum where experts/authors can share their experiences and  knowledge. Along with this there is a chat box where people can contact experts and discuss more about their problem. If they want advice on something personal. There is also a discussion forum on every post where people can write their own experience and opinion about the post.
There is also a separate page where people can find all the famous instagram pages/profiles who spread information and knowledge about menstruation and related topics. This makes sure that people find places which they can see every other day, 
There is also a FAQ where we have scrapped a lot of famous reddit threads on the topic so people can get a wide variety of perspectives.

      </p>

      <div className='title'>
        Made By
      </div>
      <div className='made'>
        <ul>
          <li>
            Aditya Dubey
          </li>
          <li>
            Gaurav Mandal
          </li>
          <li>
            Anish Inamdar
          </li>
          <li>
            Tanmay Gavali
          </li>
        </ul>
      </div>
    </div>
    </>
    
  )
}
