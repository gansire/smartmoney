import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./Pages/Main/index";
import NewEntry from "./Pages/NewEntry/index";
import Report from "./Pages/Report/index";
const Routes = createAppContainer(
    createSwitchNavigator({
        Main, 
        NewEntry, 
        Report
    }, {
        initialRouteName: 'Main',
        backBehavior: 'order'
    }),
);

export default Routes;