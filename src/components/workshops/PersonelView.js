import React from "react";
import { Space, Card} from 'antd';

const PersonelCard = ({name, content}) => {
    return (
        <Card title={name} style={{ width: 300, margin: 16 }}>
            <i>
                {content}
            </i>
        </Card>
    );
}

const personelInfo = [
    {"name": "איתי שרון", "content": "שחקו ומנחה קבוצות תאטרון פלייבק,  שותף באנסמבל let’s play  ובאנסמבל  אלתרנתיב,  מנחה את קבוצת אדוות ואת קבוצת פלייבק צעירים בחיפה. דרמה תרפיסט, בוגר המכון לפסיכותרפיה בפלייבק ומומחה בשיטת אלתור טיפולי: 'טרנספורמציות התפתחותיות'"},
    {"name": "אורלי קובו", "content": "שחקנית ומנחת סדנאות וקבוצות תאטרון פלייבק, מייסדת שותפה באנסמבל Let's Play , מנחה את קבוצת 'אספמיה', שותפה במיזם הפלייבק 'אוצרות במה' ImprovisArt עם נילי לוברני רולניק, מיזם פלייבק מיוחד המחבר את תיאטרון הפלייבק לסוגים שונים של אמנות ופרפורמנס. מנחת פלייבק מוסמכת מטעם מרכז הפלייבק העולמי CPT ."}
]

const PesonalView = () => <Space align="start">
    {personelInfo.map(({name, content}) => <PersonelCard key={name} name={name} content={content}/>)}
</Space>;

export default PesonalView;