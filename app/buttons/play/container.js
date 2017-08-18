'use strict';

import React from 'react';
import { Linking } from 'react-native';
import AnimatedImageView from '../../view/animatedImageButton';

const YOUTUBE = 'YouTube';

class PlayButtonContainer extends React.Component {

    render() {
        let link
        const video = this.props.video;
        if (video && video.length > 0) {
            const site = video[0].site;
            const key = video[0].key;

            if (site && key) {
                switch (site) {
                    case YOUTUBE:
                        link = `https://www.youtube.com/watch?v=${key}`;
                }
            }
        }

        if (link) {
            return (
                <AnimatedImageView
                    width={42}
                    height={42}
                    uri={'ic_play'}
                    onPress={() => Linking.openURL(link)} />
            );
        } else {
            return (null);
        }
    };
}

export default PlayButtonContainer;
