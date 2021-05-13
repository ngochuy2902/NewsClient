import './App.css';
import {Layout} from 'antd';
import {Register} from "./Components/Auth/Register/Register";
import {Header} from "./Components/Header/Header";
import {CategoryBar} from "./Components/Category/CategoryBar";
import {MainPage} from "./Components/Main/MainPage";

function App() {
  return (
    <div className='App'>
        <Layout style={{backgroundColor: "white"}}>
            <Header/>
            <CategoryBar/>
            <MainPage/>
        </Layout>
    </div>
  );
}

export default App;
