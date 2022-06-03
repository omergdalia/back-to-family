import React from 'react';
import { Button, Descriptions } from 'antd';
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';


const PackageView = ({title, executerScroll}) => (
    <Descriptions 
    title={title} 
    size="small"
    bordered
    extra={<Button type="primary" onClick={executerScroll}>צרו קשר</Button>} >
        <Descriptions.Item label="טיסות" span={3}>
            <MdFlightTakeoff /> טיסה ישירה להרקליון, כרתים בתאריך ה-29.9.22 בשעה 11:40 [Aegean] <br/>
            <MdFlightLand /> טיסה ישירה מהרקליון, כרתים בתאריך ה-03.10.22 בשעה 23:50 [Aegean] <br />
            * יש העברות משדה התעופה בהרקליון לריזורט, בהלוך ובחזור
        </Descriptions.Item>
        <Descriptions.Item label="לינה" span={3}>4 לילות פנסיון מלא</Descriptions.Item>
        <Descriptions.Item label="מחיר" span={3} >
            חדר זוגי - 4500 לאדם <br />
            חדר יחיד - 5300
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
            </ul>
        </Descriptions.Item>
    </Descriptions>
);

export default PackageView;