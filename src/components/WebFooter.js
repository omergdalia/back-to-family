import React from "react";
import { Layout } from "antd";
import { Icon } from "semantic-ui-react";

const { Footer } = Layout;

const FooterContact = ({isMale, name, facebookName, emailAddress}) => (
    <div className="footer-contact">
        <Icon name={isMale ? 'male' : 'female'}/> {name}
        <a href={`https://www.facebook.com/${facebookName}`} target="_blank" rel="noopener noreferrer">
            <Icon name="facebook f" />
        </a>
        <Icon name="mail" /> {emailAddress}
    </div>
);

const WebFooter = () => (
    <Footer>
        פלייבק בכרתים ©2022
        <FooterContact isMale={false} name="אורלי קובו" facebookName="orly.kovo" emailAddress="orlykov@yahoo.com"/>
        <FooterContact isMale={true} name="איתי שרון" facebookName="etay.sharon" emailAddress="etay.sharon@gmail.com"/>
    </Footer>
);

export default WebFooter;