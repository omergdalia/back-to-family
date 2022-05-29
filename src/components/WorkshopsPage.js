import React from "react";
import { Col, Divider, Row } from "antd";
import { FaPhone } from 'react-icons/fa';

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import ContactForm from "./workshops/ContactForm";
import PesonalView from "./workshops/PersonelView";


const ContactView = () => {
    const myStyle = { backgroundColor: "gray"}
    return <>
        <div style={myStyle}>
            <h3>לפרטים ולהרשמה:</h3>
            <FaPhone /> אורלי - 050-7266778 <br/>
            <FaPhone /> איתי - 054-4588573
        </div>
        <ContactForm givenStyle={myStyle} />
    </>
}


const WorkshopsPage = () => {
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
                <ContactView />
            </Col>
        </Row>   
        
        <Divider />
        <h2>אודות האינטנסיב</h2>
        <p>
            חמישה ימים של פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד.<br/>
            בסדנת האינטנסיב נחקור כיצד לייצר אווירה ופתיחת סצנות בפלייבק דרך תנועה, מוזיקה, דימויים ושימוש בחלל.<br/>
            שיטה מיוחדת שפיתחנו להרחבת והעמקת שיקופי הפלייבק, ולהענקת מבט תיאטרלי רב גוונים על סיפורי הגיבור.ה.<br/>
        </p>

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
                    חדר זוגי בוילה - כל וילה מכילה 2 חדרים זוגיים נוחים ויפים, עם מיזוג אוויר, מיטות נוחות, מטבח מאובזר, מקלחת ושירותים, סלון, טלוויזיה ומרפסת באוויר הפתוח לנוף עוצר נשימה
                </li>
                <li>
                במתחם קיים חלל מרווח ונעים לסדנאות, פינות ישיבה חיצוניות המשקיפות לים ולנוף הפתוח, פינת אוכל חיצונית ועוד.
                </li>
            </ul>
            <h3>חוף הים</h3>
                לברר עם הארי האם יש שמשיות וציוד לים. באתר כתוב שיש: מגבות חוף, שמשייה, מחצלת חוף, מסכות צלילה ושנורקלים<br />
                <b>הריזורט ממוקם באזור FERMA</b><br />
                הריזורט נמצא במיקום מצוין – מרחק של שעה וחצי נסיעה משדה"ת הרקליון, 10 דק' נסיעה מהעיר העתיקה - איראפטרה 
        </p>
        
        <Divider />
        <h2>על החבילה</h2>

    </div>
}

export default WorkshopsPage;

