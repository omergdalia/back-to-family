import React from "react";
import { Avatar , Card, Space} from 'antd';

import etayPhoto from '../../images/personel/etay-sharon.jpg'
import orlyPhoto from '../../images/personel/orly-kovo.jpg'

const { Meta } = Card;


const PersonelCard = ({name, content, image}) => {
    return (
        <Card hoverable>
            <Meta 
            title={name} 
            avatar={
                <Avatar 
                src={image} 
                size={{ xs: 64, sm: 64, md: 64, lg: 80, xl: 80, xxl: 80 }}/>
            }
        />
            <i> {content.map((line) => <>{line}<br /></>)} </i>
        </Card>
    );
}

const personelInfo = [
    {
        "name": "איתי שרון", 
        "image": etayPhoto,
        "content": [
            "שחקו ומנחה קבוצות תאטרון פלייבק,  שותף באנסמבל let’s play  ובאנסמבל  אלתרנתיב,  מנחה את קבוצת אדוות ואת קבוצת פלייבק צעירים בחיפה. דרמה תרפיסט, בוגר המכון לפסיכותרפיה בפלייבק ומומחה בשיטת אלתור טיפולי: 'טרנספורמציות התפתחותיות'",
            "מתמחה בטיפול משפחתי"
    ]
    },
    {
        "name": "אורלי קובו",
        "image": orlyPhoto,
        "content": [
            "שחקנית ומנחת סדנאות וקבוצות תאטרון פלייבק, מייסדת שותפה באנסמבל Let's Play , מנחה את קבוצת 'אספמיה', שותפה במיזם הפלייבק 'אוצרות במה' ImprovisArt עם נילי לוברני רולניק, מיזם פלייבק מיוחד המחבר את תיאטרון הפלייבק לסוגים שונים של אמנות ופרפורמנס. מנחת פלייבק מוסמכת מטעם מרכז הפלייבק העולמי CPT ."
        ]
    }
]

const PesonalView = () => <Space align="start" wrap>
    {personelInfo.map((props) => <PersonelCard key={props.name} {...props} />)}
</Space>;

export default PesonalView;