import React from 'react'; 
import { Layout, Affix, BackTop} from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import WorkshopsPage from './components/WorkshopsPage';

import './App.css';

const { Header, Content, Footer } = Layout;

const Page = ({ pageName }) => <h1>{pageName}</h1>;

const HomePage = () => <Page pageName={"עמוד הבית"} />;
const AboutPage = () => <Page pageName={"אודותיי"} />;
const PlaybackPage = () => <Page pageName={"פלייבק"} />;
const TherapyPage = () => <Page pageName={"טיפול"} />;


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <BackTop />
      <Layout className="layout" dir="rtl">
        <Affix offsetTop={0}>
          <Header >
            <Navbar />
          </Header>
        </Affix>
        <Content>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/workshops" element={<WorkshopsPage/>} />
            <Route path="/playback" element={<PlaybackPage/>} />
            <Route path="/therapy" element={<TherapyPage/>} />
            <Route path="/" element={<WorkshopsPage />} />
          </Routes>          
          <br />
          <br />
        </Content>
        <Footer> 
          בחזרה לשמפחה, איתי שרון ©2022
          <a href='https://www.facebook.com/etay.sharon' target="_blank" rel="noopener noreferrer">
            <Icon name="facebook f" />
          </a>
        </Footer>
      </Layout>;
    </BrowserRouter>
  );
}

export default App;