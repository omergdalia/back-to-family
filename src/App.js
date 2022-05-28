import './App.css';
import {Layout} from 'antd';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Page = ({ pageName }) => {
  return (
    <div className="site-layout-content">
      {pageName}
    </div>
  );
}

const HomePage = () => {
  return <Page pageName={"עמוד הבית"} />
}
const AboutPage = () => <Page pageName={"אודותיי"} />;
const PlaybackPage = () => <Page pageName={"פלייבק"} />;
const TherapyPage = () => <Page pageName={"טיפול"} />;


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Layout className="layout" dir="rtl">
        <Header >
          <Navbar />
        </Header>
        <Content style={{padding: '0px 50px'}}>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/playback" element={<PlaybackPage/>} />
            <Route path="/therapy" element={<TherapyPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>          
      </Content>
        <Footer>
          Back to Family, Etay Sharon ©2022
        </Footer>
      </Layout>;

    </BrowserRouter>
  );
}

export default App;