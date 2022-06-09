import React from 'react';
import { Descriptions } from 'antd';
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';


const PackageView = ({title, extra}) => (
    <Descriptions className='col-1' title={title} size="small" bordered>
        <Descriptions.Item label="טיסות" span={3}>
            <MdFlightTakeoff /> טיסה ישירה להרקליון, כרתים ב-29.09.22<br/>
            <MdFlightLand /> טיסה ישירה מהרקליון, כרתים לישראל ב-03.10.22<br />
            * העברות משדה התעופה בהרקליון לריזורט, בהלוך ובחזור
        </Descriptions.Item>
        <Descriptions.Item label="לינה" span={3}>4 לילות פנסיון מלא</Descriptions.Item>
        <Descriptions.Item label="מחיר" span={3} >
            חדר זוגי - 4500 ש"ח לאדם <br />
            חדר יחיד - 5400 ש"ח לאדם
        </Descriptions.Item>
        <Descriptions.Item label="פעילות" span={3}>
            טיול לעיר העתיקה איראפטרה וארוחת ערב בעיר <br />
            כל התרגולים, הסדנאות והתכנים
        </Descriptions.Item>
        <Descriptions.Item label="לא כלול בחבילה" span={3}>
            <ul>
                <li>ביטוח רפואי וביטוח מטען (רצוי לבצע ביטוח הכולל גם ביטול נסיעה)</li>
                <li>הוצאות בעלות אופי אישי</li>
                <li>ארוחות אשר לא מפורטות בתוכנית הטיול</li>
                <li>בדיקות קורונה (אם ידרשו בארץ ו/או בכרתים)</li>
            </ul>
        </Descriptions.Item>
    </Descriptions>
);

export default PackageView;