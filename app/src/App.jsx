import style from "./style.module.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import previewImg from "../public/previewImg.png";
import trusted from "../public/trusted.png";
import aboutImg from "../public/aboutImg.png";
import about1 from "../public/about1.png";
import about2 from "../public/about2.png";
import about3 from "../public/about3.png";
import popular1 from "../public/popular1.png";
import popular2 from "../public/popular2.png";
import popular3 from "../public/popular3.png";
import heart from "../public/heart.png";
import share from "../public/share.png";
import furniture from "../public/furniture.png";
import f1 from "../public/f1.png";
import f2 from "../public/f2.png";
import f3 from "../public/f3.png";
import f4 from "../public/f4.png";
import f5 from "../public/f5.png";
import f6 from "../public/f6.png";
import reviewImg from "../public/reviewImg.png";
import person from "../public/person.png";
import star from "../public/star.png";
import { motion } from "framer-motion";

function App() {
  return (
    <div className={style.MAIN}>
      <div className={style.mainWrapper}>
        <Header />
        <main>
          <section className={style.preview}>
            <motion.div
              className={style.left}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src={previewImg} alt="previewImg" />
            </motion.div>
            <motion.div
              className={style.right}
              initial={{ x: +100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1>We Help You Make Modern Furniture</h1>
              <p>
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials{" "}
              </p>
              <button>Explore More</button>
            </motion.div>
          </section>
          <section className={style.partners}>
            <p>Trusted by 20,000+ companies</p>
            <img src={trusted} alt="trusted" />
          </section>
          <section className={style.about}>
            <motion.div
              className={style.left}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src={aboutImg} alt="aboutImg" />
            </motion.div>
            <motion.div
              className={style.right}
              initial={{ x: +100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1>About Us</h1>
              <p className={style.additionalInfo}>
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials{" "}
              </p>
              <div className={style.aboutBlock}>
                <img src={about1} alt="about1" />
                <div className={style.text}>
                  <p className={style.textTitle}>Best Quality</p>
                  <p className={style.textDescription}>
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </div>
              <div className={style.aboutBlock}>
                <img src={about2} alt="about2" />
                <div className={style.text}>
                  <p className={style.textTitle}>100% Secure</p>
                  <p className={style.textDescription}>
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </div>
              <div className={style.aboutBlock}>
                <img src={about3} alt="about3" />
                <div className={style.text}>
                  <p className={style.textTitle}>Free Shopping</p>
                  <p className={style.textDescription}>
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
          <section className={style.popular}>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Our Popular Furniture
            </motion.h1>
            <div className={style.info}>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials and
                choices for our customers.
              </motion.p>
              <motion.div
                className={style.slider}
                initial={{ x: +100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div>{`<`}</div>
                <div>{`>`}</div>
              </motion.div>
            </div>
            <div className={style.wrapper}>
              <motion.div
                className={style.block}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img src={popular1} alt="popular1" className={style.popular2} />
                <div className={style.textPopular}>
                  <div className={style.first}>
                    <p className={style.title}>White Swan Chair </p>
                    <div className={style.icons}>
                      <div className={style.heart}>
                        <img src={heart} alt="heart" />
                      </div>
                      <div className={style.share}>
                        <img src={share} alt="share" />
                      </div>
                    </div>
                  </div>
                  <div className={style.second}>
                    <p className={style.price}>$40</p>
                    <button>Buy Now</button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className={style.block}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img src={popular2} alt="popular2" className={style.popular2} />
                <div className={style.textPopular}>
                  <div className={style.first}>
                    <p className={style.title}>White Swan Chair </p>
                    <div className={style.icons}>
                      <div className={style.heart}>
                        <img src={heart} alt="heart" />
                      </div>
                      <div className={style.share}>
                        <img src={share} alt="share" />
                      </div>
                    </div>
                  </div>
                  <div className={style.second}>
                    <p className={style.price}>$40</p>
                    <button>Buy Now</button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className={style.block}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img src={popular3} alt="popular3" className={style.popular2} />
                <div className={style.textPopular}>
                  <div className={style.first}>
                    <p className={style.title}>White Swan Chair </p>
                    <div className={style.icons}>
                      <div className={style.heart}>
                        <img src={heart} alt="heart" />
                      </div>
                      <div className={style.share}>
                        <img src={share} alt="share" />
                      </div>
                    </div>
                  </div>
                  <div className={style.second}>
                    <p className={style.price}>$40</p>
                    <button>Buy Now</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <section className={style.furniture}>
            <h1>All Furniture</h1>
            <div className={style.types}>
              <p>Shop By Room</p>
              <p>Shop By Category</p>
              <p>Shop By Style</p>
            </div>
            <div className={style.wrapper}>
              <motion.div
                className={style.left}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img src={furniture} alt="furniture" />
              </motion.div>
              <motion.div
                className={style.right}
                initial={{ x: +100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className={style.block}>
                  <img src={f1} alt="f1" />
                  <p>Living Room</p>
                </div>
                <div className={style.block}>
                  <img src={f2} alt="f2" />
                  <p>Kitchen</p>
                </div>
                <div className={style.block}>
                  <img src={f3} alt="f3" />
                  <p>Dining Room</p>
                </div>
                <div className={style.block1}>
                  <img src={f4} alt="f4" />
                  <p>Office</p>
                </div>
                <div className={style.block}>
                  <img src={f5} alt="f5" />
                  <p>Bed Room</p>
                </div>
                <div className={style.block}>
                  <img src={f6} alt="f6" />
                  <p>Hallway</p>
                </div>
              </motion.div>
            </div>
          </section>
          <section className={style.review}>
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration:1}}
              src={reviewImg}
              alt="reviewImg"
              className={style.reviewImg}
            />
            <motion.div
              className={style.right}
              initial={{ x: +100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration:1}}
            >
              <h1>Our customers are verry importan to us</h1>
              <p className={style.addition}>
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials and
                choices for our customers.
              </p>
              <div className={style.rew}>
                <img src={person} alt="person" />
                <div className={style.block}>
                  <p className={style.name}>Mh Jibon</p>
                  <div className={style.star}>
                    <img src={star} alt="star" />
                    <p>4.8</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          <section className={style.subscr}>
            <h1>Subscribe to get the latest news about us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore at dolore.
            </p>
            <div className={style.form}>
              <input type="text" placeholder="Enter your email" />
              <button>Register</button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
