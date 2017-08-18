'use strict';

import React from 'react';
import { Platform, Linking } from 'react-native';

class AppLinking extends React.Component {

    // Call in: componentDidMount()
    // Use action function like: handleOpenURL(url){...}
    static appLinkingAttach(action) {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {action(url)});
        } else {
            Linking.addEventListener('url', (event) => action(event.url));
        }
    };

    // Call in: componentWillUnmount()
    static appLinkingDettach() {
        if (Platform.OS === 'android') {
            return;
        }
        Linking.removeEventListener('url', (event) => action(event.url));
    };
}

export default AppLinking;
