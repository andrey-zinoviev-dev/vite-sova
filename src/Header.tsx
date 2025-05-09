import "./Header.css"
import Logo from "./Logo";
import HeaderProfile from "./HeaderProfile";

interface HeaderInterface {
    children?: React.ReactNode | React.ReactNode[],
};

export default function Header({ children }: HeaderInterface) {

    return (
      <>
        <header className="header">
          <div className="header__content">
            <div className="header__left-wrapper">
              <Logo></Logo>
              {/* <h2>SOVA</h2> */}
            </div>
            <div className="header__right-wrapper">
              <HeaderProfile></HeaderProfile>
              {children}
            </div>
          </div>

        </header>
      </>
    );
}