import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} הוא שדה חובה!',
  types: {
    email: '${label} היא לא כתובת מייל תקינה!',
    phone: '${label} הוא לא מספר טלפון תקין'
  },
  number: {
    range: 'על ה${label} להיות בין ${min} ל-${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="972">+972</Option>
      <Option value="1">+1</Option>
    </Select>
  </Form.Item>
);


const ContactForm = ({givenStyle}) => {
  // שדות למילוי - : שם , טלפון, אימייל,  ותק בפלייבק,  הודעה :
  return (
    <Form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      {...layout}
      style={{givenStyle}} 
      validateMessages={validateMessages}
      labelWrap>
      <Form.Item name={['user', 'name']} label="שם" required rules={[{required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="טלפון" required rules={[{type: 'phone'}, {required: true}]}>
        <Input addonAfter={prefixSelector} />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="מייל" required rules={[{type: 'email'}, {required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'eperience']} label="ותק בפלייבק" rules={[
          { type: 'number', min: 0, max: 99 },
        ]}>
        <InputNumber min={0} max={99} />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="הודעה">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;