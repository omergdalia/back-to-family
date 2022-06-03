import React, { useRef } from "react";
import { Col, Divider, Row } from "antd";
import { Icon } from "semantic-ui-react";
import { FaUmbrellaBeach } from 'react-icons/fa';

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import ContactForm from "./workshops/ContactForm";
import PesonalView from "./workshops/PersonelView";
import PackageView from "./workshops/PackageView";


const ContactView = (props) => {
    const { refProp } = props;
    const myStyle = { backgroundColor: "gray"};
    
    return <div ref={refProp} {...props}>
        <div style={myStyle} ref={refProp}>
            <h3>לפרטים ולהרשמה:</h3>
            <Icon name="phone" /> אורלי - 050-7266778 <br/>
            <Icon name="phone" /> איתי - 054-4588573
        </div>
        <ContactForm givenStyle={myStyle} />
    </div>
}

const activityDetails = [
    "חמישה ימים של פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד",
    "בסדנת האינטנסיב נחקור כיצד לייצר אווירה ופתיחת סצנות בפלייבק דרך תנועה, מוזיקה, דימויים ושימוש בחלל.",
    "שיטה מיוחדת שפיתחנו להרחבת והעמקת שיקופי הפלייבק, ולהענקת מבט תיאטרלי רב גוונים על סיפורי הגיבור.ה.",
    "בנוסף נטייל, נאכל טוב, נבלה בים, נסייר בעיר עתיקה ונהנה מהשקט, השלו וה  והיופי שבכרתים הקסומה."
]

const ActivityInfo = ({ details }) => (
    <p>

        {details.map((txt) => <>{txt}<br /></>)}
    </p>
    
);

const WorkshopsPage = () => {

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView()    


    return <div style={{ fontSize: 16}} id="workshop-page">
        <h1>אינטנסיב פלייבק בכרתים</h1>
        <p>
            <b>תאריכים: </b> 29.09.22 - 03.10.22<br/>
            <b>בהנחיית: </b> אורלי קובו ואיתי שרון<br/>
            חמישה ימים של פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד
            <br/><br/>
        </p>
        <Row>
            <Col span={18}><Gallery /></Col>
            <Col span={6}>
                <ContactView refProp={myRef} id="contact-us"/>
            </Col>
        </Row>

        <Divider />
        <h2>אודות האינטסיב</h2>
        <ActivityInfo details={activityDetails} />

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
            <ul>
                <li>
                    חדר זוגי בוילה - כל וילה מכילה 2 חדרים זוגיים נוחים ויפים, עם מיזוג אוויר, מיטות נוחות, מטבח מאובזר, מקלחת ושירותים, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח
                </li>
                <li>
                במתחם קיים חלל מרווח ונעים לסדנאות, פינות ישיבה חיצוניות המשקיפות לים ולנוף הפתוח, פינת אוכל חיצונית ועוד.
                </li>
            </ul>
            <h3>חוף הים</h3>
                <FaUmbrellaBeach/> חוף הים מצויד בשמשיות לשירותכם<br />
                <b>הריזורט ממוקם באזור FERMA</b><br />
                הריזורט נמצא במיקום מצוין – מרחק של שעה וחצי נסיעה משדה"ת הרקליון, 10 דק' נסיעה מהעיר העתיקה - איראפטרה 
        </p>
        
        <Divider />
        <PackageView title={<h2>על החבילה</h2>} executerScroll={executeScroll}/>

    </div>
}

export default WorkshopsPage;

