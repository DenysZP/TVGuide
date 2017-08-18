'use strict';

import React from 'react';
import AnimatedImageView from '../../view/animatedImageButton';

import { connect } from 'react-redux';
import { like, dislike } from '../../redux/like/actions';
import { isKeyContains } from '../../redux/like/selectors';

const mapStateToProps = (state, props) => {
    return {
        isLiked: props.likedByDefault ? true : isKeyContains(state, props.item.id)
    };
};

const mapDispatchToProps = {
    like, dislike
};

class LikeButtonContainer extends React.Component {

    getImage() {
        return this.props.isLiked ? 'ic_favorite_black' : 'ic_favorite'
    };

    handleClick = () => {
        const isLiked = this.props.isLiked;
        if (isLiked) {
            this.props.dislike(this.props.item);
        } else {
            this.props.like(this.props.item);
        }
    };

    render() {
        return (
            <AnimatedImageView
                width={26}
                height={26}
                uri={this.getImage()}
                onPress={this.handleClick} />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButtonContainer);
