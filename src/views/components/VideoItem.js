import React, { Component} from 'react';
import Item from '@enact/moonstone/Item';
import PropTypes from 'prop-types';
import css from './VideoItem.module.scss';

class VideoItem extends Component {
  render()
  {
    const {title, poster } = this.props;
    return(
        <Item
          kind='VideoItem'
          className='videoItem'
          css={css}
        >
          <img src={poster} alt={title} style={{height: '300px', width: '300px'}}/>
        {this.props.children}
        </Item>
    )
  }
}

VideoItem.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  source: PropTypes.string,
  desc: PropTypes.string,
}

VideoItem.defaultProps = {
  title: '',
  poster: '',
  source: '',
  desc: '',
}

export default VideoItem;