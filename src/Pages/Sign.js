import { LogAnimation, LogBox, LogContainer } from "../Styles/SignStyle";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import SignIn from "../Components/sign/SignIn";
import SignUp from "../Components/sign/SignUp";

function Sign() {
  return (
    <>
      <LogContainer>
        <LogBox>
          <div className="close">
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

          {/* <SignIn /> */}
          <SignUp />

          <LogAnimation>
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
