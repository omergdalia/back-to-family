import React from "react";
import { Divider, Row, Col} from "antd";
import { FaPhoneSquare } from 'react-icons/fa';

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import ContactForm from "./workshops/ContactForm";
import PesonalView from "./workshops/PersonelView";


const ContactView = () => {
    const myStyle = { backgroundColor: "gray"}
    return <>
        <div style={myStyle}>
            <h3>לפרטים ולהרשמה:</h3>
            <FaPhoneSquare /> אורלי - 050-7266778 <br/>
            <FaPhoneSquare /> איתי - 054-4588573
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
            <li>

            </li>
        </p>
        
    </div>
}

export default WorkshopsPage;

