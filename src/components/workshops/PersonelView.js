import React, { useMemo } from "react";
import { Avatar , Card, Space} from 'antd';

import personelInfo from './personel.json';

const { Meta } = Card;


const PersonelCard = ({name, description, image}) => {
    const imageSrc = useMemo(() => {
        return require(`../../images/personel/${image}`);
    }, [image])

    return (
        <Card hoverable>
            <Meta 
            title={name} 
            avatar={
                <Avatar 
                src={imageSrc} 
                size={{ xs: 64, sm: 64, md: 64, lg: 80, xl: 80, xxl: 80 }}/>
            }
        />
            <i> {description.map((line) => <span key={line}>{line}<br /></span>)} </i>
        </Card>
    );
}


const PesonalView = () => <Space align="start" className="personel-space" wrap>
    {personelInfo.map((props) => <PersonelCard key={props.name} {...props} />)}
</Space>;

export default PesonalView;