import React from "react";
import { Button, Divider } from "antd";
import { Icon } from "semantic-ui-react";
import { FaUmbrellaBeach } from 'react-icons/fa';

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import PesonalView from "./workshops/PersonelView";
import PackageView from "./workshops/PackageView";
import Reviews from "./workshops/Reviews.jsx";



const docsURI = "https://docs.google.com/forms/d/e/1FAIpQLSfp3sond6hgtrdNDZfQenty-iL1BblQak13ZyNUO9XaHewPDQ/viewform?usp=sf_link";


const ContactFromButton = () => (
    <Button id="form-button" type="primary" href={docsURI} target="_blank" >
        להרשמה
    </Button>
);

const ContactView = ({id}) => {
    return (
        <div id={id} className="contact col-1">
            <div>
                ליצירת קשר: 
                <Icon name="phone" /> אורלי - 050-7266778 &nbsp;&nbsp;
                <Icon name="phone" /> איתי - 054-4588573
            </div>
            <div id="test">
                <ContactFromButton />
            </div>
            
        </div>
    );
}

const ActivityInfo = () => (
    <p>
        האינטנסיב יתקיים במתכונת הכוללת גם עבודה אישית לכל משתתפ.ת.<br />
        בנוסף נטייל, נאכל טוב, נבלה בים, נסייר בעיר עתיקה ונהנה מהשקט, השלווה  והיופי שבכרתים הקסומה.<br />
    </p>
    
);

const WorkshopsPage = () => {
    return <div style={{ fontSize: 16}} id="workshop-page">
        <div id="workshop-header" className="col-1">
            <h1>אינטנסיב פלייבק בכרתים II</h1>
            <p>
                <b>תאריכים: </b> 
                <span className="date">18.09.23 - 22.09.23</span><br/>
                <b>בהנחיית: אורלי קובו ואיתי שרון</b><br/>
                חמישה ימים של סדנאות פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד
            </p>
        </div>

        <div id="top-row">
            <Gallery id="crete-seminar-gallery" />
            <ContactView id="contact-us"/>
        </div>

        <Divider />
        <h2>מה באינטנסיב?</h2>
        <ActivityInfo />

        <Divider />
        <h2>אודות המנחים</h2>
        <PesonalView />
        <Reviews />
        
        {/* <Divider />
        <h2>תוכנית לדוגמא (מסדנת אווירה ספטמבר 2022)</h2>
        <SeminarProgram /> */}

        <Divider />
        <h2>על הריזורט שלנו</h2>
        <p>
            מתחם וילות ובקתות מפנקות עם נוף לים וחוף פרטי צמוד<br />
            כל היחידות עם <b>חדרי רחצה פרטיים ומיזוג אוויר</b>.
            {/* TOOD: Add images of rooms */}
            <ul style={{maxWidth: '45em'}}>
                <li>
                    וילה המכילה 2 חדרים זוגיים נוחים ויפים, מקלחת ושירותים לכל חדר, מטבח מאובזר, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח.
                </li>
                <li>
                    דירה עם נוף מדהים לים המתאימה ל- 3 אנשים עם חדר רחצה פרטי, פינת ישיבה, מטבח מאובזר.
                </li>
                <li>
                    דירת סטודיו מרהיבה המתאימה ל- 3 אנשים, מקלחת ושירותים, מטבח מאובזר, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח.
                </li>
                <li>
                    2 בקתות עץ עם נוף מרהיב לים כשבכל בקתה מטבחון, חדר רחצה ומרפסת פרטית. 2 אנשים בבקתה.
                </li>
                <li>
                    במתחם קיים סטודיו מרווח ונעים לסדנאות, פינות ישיבה חיצוניות המשקיפות לים ולנוף הפתוח, פינת אוכל חיצונית, סאונה ועוד.
                </li>
            </ul>
            <h3><FaUmbrellaBeach/> חוף הים</h3>
                חוף פרטי עם דק מעץ והצללה<br />
                הריזורט ממוקם באזור FERMA<br />
                הריזורט נמצא במיקום מצוין – מרחק של שעה וחצי נסיעה משדה"ת הרקליון, 10 דק' נסיעה מהעיר העתיקה - איראפטרה 
        </p>
        
        <Divider />
        <PackageView title={<h2>על החבילה</h2>} />
        <br />
        <ContactView />
    </div>
}

export default WorkshopsPage;

