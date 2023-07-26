import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Mindspace from '../images/Mindspace.png';
import '../style/AppHeader.css';
export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isWelcomeComponent = location.pathname === '/welcome';
  const isMindfulnessComponent = location.pathname === '/Building/Mindfulness';
  const isRebirthingComponent = location.pathname === '/Building/Rebirthing';
  const isSensationsComponent = location.pathname === '/Building/Sensations';
  const isMindfulnessModel = location.pathname === '/model/Mindfulness';
  const isRebirthingModel = location.pathname === '/model/Rebirthing';
  const isSensationsModel = location.pathname === '/model/Sensations';
const isStesisContent = location.pathname ==='/thesis/content'
const isStesis1 = location.pathname ==='/thesis/page/?1'


  let componentText = '';
  if (isMindfulnessComponent) {
    componentText = 'האי לקְשִׁיבוּת';
  } else if (isRebirthingComponent) {
    componentText = 'האי לנְשִׁימָה';
  } else if (isSensationsComponent) {
    componentText = 'האי לחוּשִׁים';
  } else if (isMindfulnessModel) {
    componentText = 'פרוגרמת האי לקְשִׁיבוּת';
  } else if (isRebirthingModel) {
    componentText = 'פרוגרמת האי לנשימה';
  } else if (isSensationsModel) {
    componentText = 'פרוגרמת האי לחושים';
  }
else if(isStesisContent) componentText ='תוכן העניינים'
else if(isStesis1) componentText ='אבסטרקט' 

  return (
    <header className="AppHeader">
      <Link to="/" className="logoLink">
        <div className="logoContainer">
          <img className="Logo-footer" src={logo} alt="Logo" />
          <img src={Mindspace} alt="Mindspace" className="Mindspace-footer" />
        </div>
      </Link>
      <div className="headerRight">
        
        {componentText && <span className="componentText">{componentText}</span>}
        {!isWelcomeComponent && (
          <button className="button-footer" onClick={handleGoBack}>
            לחזור
          </button>
        )}
      </div>
    </header>
  );
}
