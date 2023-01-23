import React from "react";
import { Button, Divider, Space } from "antd";
import { Icon } from "semantic-ui-react";

import SeminarProgram from "./workshops/SeminarProgram";
import Gallery from "./workshops/SeminarGallery";  
import PesonalView from "./workshops/PersonelView";
import PackageView from "./workshops/PackageView";
import ResortInfo from "./workshops/ResortInfo";
import Reviews from "./workshops/Reviews.jsx";


const docsURI = "https://docs.google.com/forms/d/e/1FAIpQLSfp3sond6hgtrdNDZfQenty-iL1BblQak13ZyNUO9XaHewPDQ/viewform?usp=sf_link";

const ContactFromButton = () => (
    <Button className="contact-button" type="primary" style={{borderRadius: "10px"}} href={docsURI} target="_blank" >
        להרשמה
    </Button>
);

const ContactView = ({id}) => {
    return (
        <div id={id} className="contact col-1">
            <div>ליצירת קשר:</div>
            <Space wrap>
                <span><Icon name="phone" /> אורלי - 050-7266778</span>
                <span><Icon name="phone" /> איתי - 054-4588573</span>
            </Space>
            <div>
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
        <ResortInfo />
        
        <Divider />
        <PackageView title={<h2>על החבילה</h2>} />
        <br />
        <ContactView />
    </div>
}

export default WorkshopsPage;

