import React from "react";
import { Divider } from "antd";

import SeminarProgram from "../views/SeminarProgram.jsx";
import Gallery from "../views/SeminarGallery.jsx";  
import PesonalView from "../views/PersonelView.jsx";
import PackageView from "../views/PackageView.jsx";
import ResortInfo from "../views/ResortInfo.jsx";
import Reviews from "../views/Reviews.jsx";
import ContactView from "../views/ContactView.jsx";

import configData from '../../config.js';

const { galleryImages, programs, personel, reviews } = configData;

const ActivityInfo = () => (
    <p>
        חמישה ימים של סדנאות פלייבק, תנועה ומוזיקה בריזורט מפנק עם חוף ים צמוד<br />
        האינטנסיב יתקיים במתכונת הכוללת גם עבודה אישית לכל משתתפ.ת.<br />
        בנוסף נטייל, נאכל טוב, נבלה בים, נסייר בעיר עתיקה ונהנה מהשקט, השלווה  והיופי שבכרתים הקסומה.
    </p>
    
);

const WorkshopsPage = () => {
    return <div style={{ fontSize: 16}} id="workshop-page">
        <div id="workshop-header" className="col-1">
            <center>
                <h1 style={{fontSize: "xx-large"}}>אינטנסיב פלייבק כרתים II</h1>
                <p>
                    <div style={{fontSize: "larger", marginBottom: "1vh"}}>
                        <b>תאריכים: </b> 
                        <span className="date">22.09.23 - 18.09.23</span><br/>
                    </div>
                    <b style={{fontSize: "27px"}}>בהנחיית: אורלי קובו ואיתי שרון</b><br/>
                </p>
            </center>
        </div>

        <div id="top-row">
            <Gallery id="crete-seminar-gallery" images={galleryImages} />
            <ContactView id="contact-us"/>
        </div>

        <Divider />
        <h2>מה באינטנסיב?</h2>
        <ActivityInfo />

        {
            process.env.REACT_APP_SHOW_PERSONEL.toLowerCase() === "true" ?
            <>
                <Divider />
                <h2>אודות המנחים</h2>
                <PesonalView personelInfo={personel}/>
            </> : ""
        }        
        {
            process.env.REACT_APP_SHOW_PROGRAM.toLowerCase() === "true" ? 
            <>
                <Divider />
                <h2>תוכנית לדוגמא (מסדנת אווירה ספטמבר 2022)</h2>
                <SeminarProgram programs={programs}/>
            </> : ""
        }
        {
            process.env.REACT_APP_SHOW_RESORT.toLowerCase() === "true" ? 
            <>
                <Divider />
                <h2>על הריזורט שלנו</h2>
                <ResortInfo />
            </> : ""
        }
        {
            process.env.REACT_APP_SHOW_PACKAGE.toLowerCase() === "true" ? 
            <>
                <Divider />
                <PackageView title={<h2>על החבילה</h2>} />
                <br />
            </> : ""
        }
        {
            process.env.REACT_APP_SHOW_REVIEWS.toLowerCase() === "true" && 
            <>
                <Divider />
                <h2>כתבו עלינו אחרי אינטנסיב כרתים הראשון</h2>
                <Reviews reviews={reviews}/>
            </>
        }

        <ContactView />    
    </div>
}

export default WorkshopsPage;

