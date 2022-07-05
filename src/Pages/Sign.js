import { LogAnimation, LogBox, LogContainer } from "../Styles/SignStyle";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import SignIn from "../Components/sign/SignIn";
import SignUp from "../Components/sign/SignUp";
import Reset from "../Components/sign/Reset";
import { useState } from "react";

function Sign({ closeModal }) {
  const [components, setComponents] = useState("/signin");

  const transComponent = (element) => {
    setComponents(element);
  };
  return (
    <>
      <LogContainer>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            height: "100%",
          }}
          onClick={closeModal}
        ></div>
        <LogBox>
          <div className="close" onClick={closeModal}>
            <FaIcons.FaTimes />
          </div>
          <h5>
            CHEF P
            <GiIcons.GiKnifeFork style={{ transform: "translateY(-3px)" }} />
            LACE
          </h5>
          <h2>
            Welcome to CHEF P
            <GiIcons.GiKnifeFork style={{ transform: "translateY(-3px)" }} />
            LACE
          </h2>

          {components === "/signin" ? (
            <SignIn handleChange={transComponent} />
          ) : components === "/signup" ? (
            <SignUp handleChange={transComponent} />
          ) : (
            <Reset handleChange={transComponent} />
          )}

          <LogAnimation sizing="200px">
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>
          </LogAnimation>
        </LogBox>
      </LogContainer>
    </>
  );
}

export default Sign;
