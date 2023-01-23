import React from 'react';
import { Descriptions } from 'antd';
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';


const PackageView = ({ title }) => (
    <Descriptions className='col-1' title={title} size="small" bordered>
        <Descriptions.Item label="טיסות" span={3}>
            <MdFlightTakeoff /> טיסה ישירה להרקליון, כרתים ב-18.09.23<br/>
            <MdFlightLand /> טיסה ישירה מהרקליון, כרתים לישראל ב-22.09.23<br />
            * העברות משדה התעופה בהרקליון לריזורט ובחזרה
        </Descriptions.Item>
        <Descriptions.Item label="לינה" span={3}>4 לילות על בסיס פנסיון מלא (ארוחות בוקר, צהריים וערב)</Descriptions.Item>
        <Descriptions.Item label="מחיר" span={3} >
            חדר זוגי בוילה - 5150 ש"ח לאדם <br />
            חדר זוגי בבקתות העץ - 5150 ש"ח לאדם<br />
            חדר לשלישייה בדירת הסטודיו או בוילה - 4750 ש"ח לאדם
        </Descriptions.Item>
        <Descriptions.Item label="פעילות" span={3}>
            סיורים בערים עתיקות ועוד הפתעות! <br />
            וכמובן, את כל סדנאות הפלייבק, הג'אמים והפעילויות בריזורט
        </Descriptions.Item>
        <Descriptions.Item label="לא כלול בחבילה" span={3}>
            <ul>
                <li>ביטוח רפואי וביטוח מטען (רצוי לבצע ביטוח הכולל גם ביטול נסיעה)</li>
                <li>הוצאות אישיות נוספות</li>
                <li>ארוחות אשר לא מפורטות בתוכנית האינטנסיב</li>
                <li>בדיקות קורונה (אם ידרשו בארץ ו/או בכרתים)</li>
            </ul>
        </Descriptions.Item>
    </Descriptions>
);

export default PackageView;