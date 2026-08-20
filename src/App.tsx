import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, compass, settings } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import SettingsDetail from './pages/SettingsDetail';
import UserInfor from './pages/UserInfor';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/*
          外层 IonRouterOutlet — 全屏页面（无 tab bar）
        */}
        <Route exact path="/user-infor" component={UserInfor} />

        {/*
          内层 IonTabs — tab 页面
          IonTabs 内嵌的 IonRouterOutlet 负责 tab 路由
        */}
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1" component={Tab1} />
            <Route exact path="/tab2" component={Tab2} />
            <Route exact path="/tab3" component={Tab3} />
            <Route exact path="/tab3/detail" component={SettingsDetail} />
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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
