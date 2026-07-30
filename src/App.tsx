import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, compass, settings } from 'ionicons/icons';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <IonTabs>
        {/* 
        1. IonRouterOutlet 是 Ionic React 的路由占位容器，负责渲染当前匹配路由对应的页面组件，
            并提供原生风格的页面过渡动画（如 iOS 的滑动推入/推出）。
        2. IonTabs 要求子组件必须是 IonRouterOutlet，这样才能联动底部 tab 的高亮状态和页面切换    
        */}
        <IonRouterOutlet>
          <Route exact path="/tab1" component={Tab1} />
          <Route exact path="/tab2" component={Tab2} />
          <Route exact path="/tab3" component={Tab3} />
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={compass} />
            <IonLabel>Discover</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </BrowserRouter>
  </IonApp>
);

export default App;
