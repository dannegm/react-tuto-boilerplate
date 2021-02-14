import React from 'react';
import PropTypes from 'prop-types';

import {
    Wrapper,
    Img,
    Row,
    Headline,
    Time,
} from './BookItem.styled'

const BookItem = ({ title, duration, cover }) => {
    return (
        <Wrapper>
            <Img src={cover} alt={`Portada de ${title}`} />
            <Row>
                <Headline>{title}</Headline>
                <Time>{duration}</Time>
            </Row>
        </Wrapper>
    )
};
BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    cover: PropTypes.string,
};
BookItem.defaultProps = {
    cover: 'https://www.indigenousmusicawards.com/img/placeholder-music.png'
};


// class BookItem extends React.Component {
//     constructor () {
//         this.state = {
//             play: false,
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.setState.play = true} />
//             </div>
//         )
//     }
// }

export default BookItem;