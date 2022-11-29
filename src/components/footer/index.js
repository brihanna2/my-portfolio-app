import React from "react";
import {
  GoTopWrap,
  FooterContent,
  FooterWrap,
  FooterContentWrap,
  FooterHeading,
  FooterContactingWrap,
  FooterWrapEmail,
  FooterPhone,
  FooterSocialIcons,
} from "./style";
import { FaAngleUp } from "react-icons/fa";
import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Button } from "../button";
const Footer = () => {
  return (
    <FooterWrap id="contact">
      <FooterContent>
        <FooterContentWrap>
          <FooterHeading>
            <h3>Contact</h3>
            <p>
              I am looking for great collaborations,
              <br /> let’s discuss and build something together
            </p>
          </FooterHeading>

          <FooterWrapEmail>
            <div>
              <span>Email:</span>
            </div>
            <div>
              {" "}
              <a href="mailto:contact@chrisnonso8@gmail.com">
                bonifacepromzy7@gmail.com
              </a>
            </div>
          </FooterWrapEmail>
          <FooterPhone>
            <div>
              <span>Phone:</span>
            </div>
            <div>
              {" "}
              <a href="#">+234 80 6507 6310</a>
            </div>
          </FooterPhone>
          <FooterContactingWrap>
            <p>
              Have any project in your mind?{" "}
              <span style={{ color: "#2FABB2" }}>Let’s discuss</span> the
              project
            </p>
            <a href="mailto:bonifacepromzy7@gmail.com">
              <Button
                text={"Send me a mail"}
                bgColor="#2FABB2"
                filled={true}
                noIcon
              />
            </a>
          </FooterContactingWrap>
          <FooterSocialIcons>
            <div> </div>
            <div></div>
            <div>
              {" "}
              <a href="https://www.linkedin.com/in/boniface-promise-chiwendu-2b5639179">
                <AiFillLinkedin />
              </a>
            </div>
          </FooterSocialIcons>
        </FooterContentWrap>
      </FooterContent>
    </FooterWrap>
  );
};

export { Footer };
