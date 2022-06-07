import React from 'react'; 
import { Layout, BackTop} from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WebFooter from './components/WebFooter';
import WorkshopsPage from './components/WorkshopsPage';

import './App.css';

const { Header, Content } = Layout;

// const Page = ({ pageName }) => <h1>{pageName}</h1>;

// const HomePage = () => <Page pageName={"עמוד הבית"} />;
// const AboutPage = () => <Page pageName={"אודותיי"} />;
// const PlaybackPage = () => <Page pageName={"פלייבק"} />;
// const TherapyPage = () => <Page pageName={"טיפול"} />;


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <BackTop />
      <Layout className="layout" dir="rtl">
        <Header 
          style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className='logo'>
              Playback in Crete
            </div>
          </Header>
        <Content>
          <Routes>
            {/* <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/workshops" element={<WorkshopsPage/>} />
            <Route path="/playback" element={<PlaybackPage/>} />
            <Route path="/therapy" element={<TherapyPage/>} /> */}
            <Route path="/" element={<WorkshopsPage />} />
            <Route path="/:any" element={<WorkshopsPage />} />
          </Routes>          
          <br />
          <br />
        </Content>
        <WebFooter />
      </Layout>;
    </BrowserRouter>
  );
}

export default App;