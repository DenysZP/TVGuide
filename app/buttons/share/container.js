'use strict';

import React from 'react';
import { Share } from 'react-native';
import AnimatedImageView from '../../view/animatedImageButton';

class ShareButtonContainer extends React.Component {

    render() {
        return (
            <AnimatedImageView
                width={26}
                height={26}
                uri={'ic_share'}
                onPress={() => Share.share({ message: `I recommend to view "${this.props.item.name}"` })}
                style={{ marginRight: 12 }} />
        );
    };
}

export default ShareButtonContainer;
