import style from "./style.module.css";
import fb from "./img/fb.png";
import inst from "./img/inst.png";
import ytb from "./img/ytb.png";
import tw from "./img/tw.png";
import str from "./img/str.png";
export default function Footer() {
  return (
    <div className={style.mainWRP}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <h1>DudeShape</h1>
          <p>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
            eiusmod tempor incididunt ut labore .
          </p>
          <h1 className={style.follow}>Follow Us :</h1>
          <div className={style.social}>
            <img src={fb} alt="fb" />
            <img src={tw} alt="tw" />
            <img src={inst} alt="inst" />
            <img src={ytb} alt="ytb" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.left2}>
            <h1>Take a tour</h1>
            <p>Features</p>
            <p>Pricing</p>
            <p>Product</p>
            <p>Support</p>
          </div>
          <div className={style.center}>
            <h1>Our company</h1>
            <p>About Us</p>
            <p>Blog</p>
            <p>Media</p>
            <p>Contact Us</p>
          </div>
          <div className={style.right2}>
            <h1>Subscribe</h1>
            <p>Subscribe to get the latest news from us</p>
            <div className={style.inpt}>
              <input type="text" placeholder="Email Address" />
              <img src={str} alt="str" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.cop}>
        <p>Copyright @ 2021. Crafted with love.</p>
      </div>
    </div>
  );
}
