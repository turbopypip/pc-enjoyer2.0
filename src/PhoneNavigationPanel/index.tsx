import React, {FC} from 'react';
import NavigationIcon from "../Icons/showNavigationIcon.svg"

type Props = {
  setShowNavigation: (showNavigation: boolean) => void;
};

const PhoneNavigationPanel:FC<Props> = ({setShowNavigation}) => {

  return (
    <nav className="PhoneNavigationPanel">
      <p onClick={() => setShowNavigation(true)}>
        <img src={NavigationIcon} width="20px" height="20px" className="navigationIcon"/>
      </p>
      <p className="Pc-EnjoyerLogoPhone">PC Enjoyer</p>
    </nav>
  );
};

export default PhoneNavigationPanel;