import "./App.css";
import UserList from "./UserList";
import NavBar from "./NavBar";
import { HeartOutlined, HeartTwoTone, HeartFilled } from "@ant-design/icons";
import Marquee from "react-fast-marquee";
function App() {
  return (
    <div>
      <NavBar />
      <UserList />

      <Marquee>
        {" "}
        <footer>
          {" "}
          Designed with <HeartOutlined />
          <HeartTwoTone twoToneColor="#eb2f96" />
          <HeartFilled />
          by Jaytechent @2023 All Right Reserved
        </footer>
      </Marquee>
    </div>
  );
}

export default App;
