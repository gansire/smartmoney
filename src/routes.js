import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./Pages/Main/index";
import NewEntry from "./Pages/NewEntry/index";
import Report from "./Pages/Report/index";
import Welcome from "./Pages/Welcome/index";

const Routes = createAppContainer(
    createSwitchNavigator({
        Welcome,
        Main, 
        NewEntry, 
        Report
    }, {
        initialRouteName: 'Welcome',
        backBehavior: 'order'
    }),
);

export default Routes;