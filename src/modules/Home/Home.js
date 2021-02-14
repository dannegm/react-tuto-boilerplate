import React from 'react';
import { nanoid } from 'nanoid';

import Shell from '../../shared/layout/Shell';

import BookItem from '../../shared/components/BookItem';

import { sequence as ArraySequence } from '../../shared/utils/arrays';

import {
    Row,
} from './Home.styled';

const Home = () => {

    const mockData = ArraySequence(4).map(i => ({
        id: nanoid(),
        title: 'Lorem Ipsum',
        duration: '00:00',
        cover: 'https://cdn.shopify.com/s/files/1/0049/3351/7425/products/MoM_BoxTop_EN_3535x.jpg?v=1594402639',
    }))

    return (
        <Shell>
            <Row>
                {
                    mockData.map(book => (
                        <BookItem
                            key={book.id}
                            title={book.title}
                            duration={book.duration}
                            cover={book.cover}
                        />
                    ))
                }
            </Row>
        </Shell>
    );
};

export default Home;
