import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Shell from '../../shared/layout/Shell';

import AutoComplete from '../../shared/components/AutoComplete';
import BookItem from '../../shared/components/BookItem';

import { sequence } from '../../shared/utils/arrays';
import { secondsToTimeFormat } from '../../shared/utils/strings';

import useBookList from '../../state/hooks/useBookList';

import {
    Wrapper,
    Row,
    Column,
    ResultsHeader,
    ResultsHeaderLabel,
} from './Home.styled';

const Home = () => {
    const [query, setQuery] = useState('');

    const { data, loading } = useBookList();

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <Shell>
            <Wrapper>
                <Row>
                    <Column>
                        <AutoComplete value={query} onChange={handleChange} />
                        <ResultsHeader>
                            <ResultsHeaderLabel>
                                Results for:
                            </ResultsHeaderLabel>
                            <ResultsHeaderLabel>
                                <strong>{query}</strong>
                            </ResultsHeaderLabel>
                        </ResultsHeader>
                    </Column>
                </Row>

                {loading === true && (
                    <h1>Cargando....</h1>
                )}

                {loading === false && data !== null && (<Row>
                    {
                        data.items.map(item => {
                            return (
                                <BookItem
                                    key={item.sys.id}
                                    title={item.fields.title['es-MX']}
                                    duration={secondsToTimeFormat(item.fields.duration['es-MX'])}
                                    cover={item.fields.cover['es-MX']}
                                />
                            )
                        })
                    }
                </Row>)}
            </Wrapper>
        </Shell>
    );
};

export default Home;
