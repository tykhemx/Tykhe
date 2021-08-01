import React, { useState} from 'react'
import './App.css';
import { DatePicker, Button, Typography, Space} from 'antd';
import 'antd/dist/antd.css'; 
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SolutionOutlined, 
  LoadingOutlined, 
  SmileOutlined,
  ScheduleTwoTone,
  SkypeOutlined,
  AlibabaOutlined,
  DeleteFilled,
  ProfileTwoTone,
  SearchOutlined
} from '@ant-design/icons';
import { Steps } from 'antd';
import { Carousel } from 'antd';
import { Transfer } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Step } = Steps;


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Title, Text, Link, Paragraph} = Typography;

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `Carton${i + 1}`,
    description: `description of content${i + 1}`,
  });
}
const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);


function App() {

  const [collapsed, setCollapsed]= useState(false);
  const [editar, setEditar] = useState('Texto Editable')
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

   const onCollapse  = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
       {/*      <PieChartOutlined style={{ fontSize: '60px', color: 'green'}}  twoToneColor='#52c41a'/>
            <ScheduleTwoTone style={{ fontSize: '60px', color: 'green'}}  twoToneColor='#52c41a'/> */}           
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Inventario
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Clientes">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Módulo</Breadcrumb.Item>
              <Breadcrumb.Item>Inventario</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <p>Fecha Inicial: </p>
              <DatePicker/>
              <br/><br/><br/>
              <Steps>
                <Step status="finish" title="Recibir" icon={<UserOutlined />} />
                <Step status="finish" title="Registrando" icon={<SolutionOutlined />} />
                <Step status="process" title="Almacenar" icon={<LoadingOutlined />} />
                <Step status="wait" title="Finalizar" icon={<SmileOutlined />} />
              </Steps>
              <br/><br/><br/>

              <Transfer
                dataSource={mockData}
                titles={['Fuente', 'Destino']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                onScroll={onScroll}
                render={item => item.title}
              />
             
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Tykhé © 2021 </Footer>
        </Layout>
      </Layout>
      
    </div>
  );
}

export default App;
