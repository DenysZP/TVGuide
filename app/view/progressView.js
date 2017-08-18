'use strict';

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class ProgressView extends React.PureComponent {

    render() {
        if (this.props.loading) {
            return (
                <ActivityIndicator animating size="large" style={{ marginTop: 15, marginBottom: 15 }} />
            );
        } else {
            return null;
        }
    }
}

export default ProgressView;
