import React from "react";
import { Button, Space } from "antd";
import { Icon } from "semantic-ui-react";

const docsURI = process.env.REACT_APP_DOCS_URI;

const ContactFormButton = () => (
    <Button className="contact-button" type="primary" href={docsURI} target="_blank">
        להרשמה
    </Button>
);

const ContactView = (props) => {
    return (
        <div className="contact col-1" {...props}>
            <div>ליצירת קשר:</div>
            <Space wrap>
                <span><Icon name="phone" /> אורלי - 050-7266778</span>
                <span><Icon name="phone" /> איתי - 054-4588573</span>
            </Space>
            <div>
                <ContactFormButton />
            </div>
        </div>
    );
};

export default ContactView;