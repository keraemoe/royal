import React from "react";
import style from "./ContactUs.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className={style.main}>
      <div className={style.background_opacity}></div>
      <div className="container">
        <motion.div
          className={style.title}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>Задайте интересующий вас вопрос</h2>
        </motion.div>
        <div className={style.icons}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, x: 0, scale: 1 },
              hidden: { opacity: 0, x: -100 },
            }}
            className={style.ellipse}
          >
            <a href="https://instagram.com/royal.kg_?igshid=YmMyMTA2M2Y=">
              <Image src="/insta.png" alt="insta logo" width={46} height={46} />
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            className={style.ellipse}
          >
            <a href="https://www.facebook.com/royalconstructionkg/">
              <Image
                src="/facebook.png"
                alt="facebook logo"
                width={36}
                height={46}
              />
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            className={style.ellipse}
          >
            <a href="https://api.whatsapp.com/send/?phone=996556111444&text&type=phone_number&app_absent=0">
              <Image
                src="/Vector.png"
                alt="whatsapp logo"
                width={46}
                height={46}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;