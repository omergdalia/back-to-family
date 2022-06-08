import React, { useRef } from "react";
import { Affix, Button, Col, Divider, Row } from "antd";
import { Icon } from "semantic-ui-react";
import { FaUmbrellaBeach } from 'react-icons/fa';

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import PesonalView from "./workshops/PersonelView";
import PackageView from "./workshops/PackageView";

const docsURI = "https://docs.google.com/forms/d/e/1FAIpQLSfp3sond6hgtrdNDZfQenty-iL1BblQak13ZyNUO9XaHewPDQ/viewform?usp=sf_link";


const ContactFromButton = () => <Button id="form-button" type="primary" href={docsURI} target="_blank" >מלאו פרטים</Button>

const ContactView = ({id}) => {
    return (
        <div id={id} className="contact">
            <h3>לפרטים ולהרשמה:</h3>
            <p>
                <Icon name="phone" /> אורלי - 050-7266778 <br/>
                <Icon name="phone" /> איתי - 054-4588573<br/>
            </p>
            <ContactFromButton />
        </div>
    );
}

const ActivityInfo = () => (
    <p>
        חמישה ימים של פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד<br />
        בסדנת האינטנסיב <b>נחקור כיצד לייצר אווירה</b> ופתיחת סצנות בפלייבק דרך תנועה, מוזיקה, דימויים ושימוש בחלל.<br />
        שיטה מיוחדת שפיתחנו להרחבת והעמקת שיקופי הפלייבק, ולהענקת מבט תיאטרלי רב גוונים על סיפורי הגיבור.ה.<br />
        האינטנסיב יתקיים בקבוצה קטנה ובמתכונת הכוללת גם עבודה אישית לכל משתתפ.ת.<br />
        בנוסף נטייל, נאכל טוב, נבלה בים, נסייר בעיר עתיקה ונהנה מהשקט, השלווה  והיופי שבכרתים הקסומה.<br />
    </p>
    
);

const WorkshopsPage = () => {

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView()    


    return <div style={{ fontSize: 16}} id="workshop-page">
        <h1>אינטנסיב פלייבק בכרתים</h1>
        <p>
            <b>תאריכים: </b> 
            <span className="date">29.09.22 - 03.10.22</span><br/>
            <b>בהנחיית: </b> אורלי קובו ואיתי שרון<br/>
            חמישה ימים של פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד
            <br ref={myRef}/><br/>
        </p>

        <div id="top-row">
            <Gallery id="crete-seminar-gallery" />
            <ContactView id="contact-us"/>
        </div>

        <Divider />
        <h2>אודות האינטנסיב</h2>
        <ActivityInfo />

        <Divider />
        <h2>אודות המנחים</h2>
        <PesonalView />

        <Divider />
        <h2>אודות התוכנית</h2>
        <SeminarProgram />

        <Divider />
        <h2>על הריזורט שלנו</h2>
        <p>
            מתחם של וילות מפנקות עם חוף ים צמוד
            <ul style={{maxWidth: '45em'}}>
                <li>
                    חדר זוגי בוילה - כל וילה מכילה 2 חדרים זוגיים נוחים ויפים, עם מיזוג אוויר, מיטות נוחות, מטבח מאובזר, מקלחת ושירותים, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח
                </li>
                <li>
                במתחם קיים חלל מרווח ונעים לסדנאות, פינות ישיבה חיצוניות המשקיפות לים ולנוף הפתוח, פינת אוכל חיצונית ועוד.
                </li>
            </ul>
            <h3>חוף הים</h3>
                <FaUmbrellaBeach/> חוף הים מצויד בשמשיות לשירותכם<br />
                הריזורט ממוקם באזור FERMA<br />
                הריזורט נמצא במיקום מצוין – מרחק של שעה וחצי נסיעה משדה"ת הרקליון, 10 דק' נסיעה מהעיר העתיקה - איראפטרה 
        </p>
        
        <Divider />
        <PackageView title={<h2>על החבילה</h2>} executerScroll={executeScroll}/>
        <Affix offsetBottom={20} dir="ltr" id="fixed-form-button">
            <ContactFromButton />
        </Affix>
    </div>
}

export default WorkshopsPage;

