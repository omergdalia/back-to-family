import React from "react";
import { Image, Space } from "antd";
import { FaUmbrellaBeach } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

import lroom1 from '../../images/resorts/resort2/left room (38).webp';
import lroom2 from '../../images/resorts/resort2/left room (43).webp';
import lroom3 from '../../images/resorts/resort2/left room (44).webp';
import rroom1 from '../../images/resorts/resort2/right room (39).webp';
import rroom2 from '../../images/resorts/resort2/right room (42).webp';
import rroom3 from '../../images/resorts/resort2/right room (47).webp';
import gallery1 from '../../images/resorts/resort2/gallery (59).webp';
import gallery2 from '../../images/resorts/resort2/gallery (62).webp';
import gallery3 from '../../images/resorts/resort2/gallery (63).webp';
import studio1 from '../../images/resorts/resort2/studio (56).webp';
import studio2 from '../../images/resorts/resort2/studio (57).webp';
import cabin1 from '../../images/resorts/resort2/wood cabin 1 (19).webp';
import cabin2 from '../../images/resorts/resort2/wood cabin 2 (21).webp';

const RoomImage = ({src, alt}) => <Image src={src} alt={alt} preview={true} className="room-image"/>;

const RoomImageArea = (props) => (
    <Image.PreviewGroup>
        <Space size={[8, 16]} wrap {...props} />
        <br /><br />
    </Image.PreviewGroup>
);

const ResortInfo = () => 
    <div>
        מתחם וילות ובקתות מפנקות עם נוף לים וחוף פרטי צמוד<br />
        כל היחידות עם <b>חדרי רחצה פרטיים ומיזוג אוויר</b>.

        <ul style={{ maxWidth: '45em' }}>
            <li>
                וילה המכילה 2 חדרים זוגיים נוחים ויפים, מקלחת ושירותים לכל חדר, מטבח מאובזר, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח.
                <br />
                <RoomImageArea>
                    <RoomImage src={lroom1} alt={`left room image 1`} />
                    <RoomImage src={lroom2} alt={`left room image 2`} />
                    <RoomImage src={lroom3} alt={`left room image 3`} />
                    <RoomImage src={rroom1} alt={`right room image 1`} />
                    <RoomImage src={rroom2} alt={`right room image 2`} />
                    <RoomImage src={rroom3} alt={`right room image 3`} />
                </RoomImageArea>
            </li>
            <li>
                דירה עם נוף מדהים לים המתאימה ל- 3 אנשים עם חדר רחצה פרטי, פינת ישיבה, מטבח מאובזר.
            </li>
            <li>
                דירת סטודיו מרהיבה המתאימה ל- 3 אנשים, מקלחת ושירותים, מטבח מאובזר, סלון, טלוויזיה ומרפסת עם נוף לים הפתוח.
                <br />
                <RoomImageArea>
                        <RoomImage src={gallery1} alt={`gallery room 1`} />
                        <RoomImage src={gallery2} alt={`gallery room 2`} />
                        <RoomImage src={gallery3} alt={`gallery room 3`} />
                </RoomImageArea>
            </li>
            <li>
                2 בקתות עץ עם נוף מרהיב לים כשבכל בקתה מטבחון, חדר רחצה ומרפסת פרטית. 2 אנשים בבקתה.
                <br />
                <RoomImageArea>
                    <RoomImage src={cabin1} alt={`wood cabin 1`} />
                    <RoomImage src={cabin2} alt={`wood cabin 2`} />
                </RoomImageArea>
            </li>
            <li>
                במתחם קיים סטודיו מרווח ונעים לסדנאות, פינות ישיבה חיצוניות המשקיפות לים ולנוף הפתוח, פינת אוכל חיצונית, סאונה ועוד.
                <br />
                <RoomImageArea>
                    <RoomImage src={studio1} alt={`studio 1`} />
                    <RoomImage src={studio2} alt={`studio 2`} />
                </RoomImageArea>
            </li>
        </ul>
        <h3><FaUmbrellaBeach /> חוף הים</h3>
        חוף פרטי עם דק מעץ והצללה<br /><br />
        <GrMapLocation /> הריזורט ממוקם באזור FERMA<br />
        הריזורט נמצא במיקום מצוין – מרחק של שעה וחצי נסיעה משדה"ת הרקליון, 10 דק' נסיעה מהעיר העתיקה - איראפטרה
    </div>;

export default ResortInfo;