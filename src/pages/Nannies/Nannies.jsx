import Select from 'react-select';
import {
    NanniesSection,
    NanniesContainer,
    NanniesFilterLabel,
    
    customStyles,
    LoadMoreButton,
    NanniesList
} from "./Nannies.styled";
import noPhoto from '../../assets/no-image.png';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { NanniesCard } from 'components/NanniesCard/NanniesCard';

const Nannies = () => {
    const [filter, setFilter] = useState({ value: 'a to z', label: 'A to Z' });
    console.log('filter =>', filter);
    
    const options = [
        { value: 'a to z', label: 'A to Z' },
        { value: 'z to a', label: 'Z to A' },
        { value: 'less 10', label: 'Less than 10$' },
        { value: 'more 10', label: 'Greater than 10$' },
        { value: 'popular', label: 'Popular' },
        { value: 'not popular', label: 'Not popular' },
        { value: 'all', label: 'Show all' }
    ];
    
    return (
        <NanniesSection>
            <NanniesContainer>
                <NanniesFilterLabel>Filters
                    <Select
                        styles={customStyles}
                        onChange={setFilter}
                        options={options}
                        // isSearchable
                        defaultValue={options[0]}
                    />
                </NanniesFilterLabel>
                <NanniesList>
                    <NanniesCard />
                    <NanniesCard />
                    <NanniesCard />
                </NanniesList>
                <LoadMoreButton>Load more</LoadMoreButton>
            </NanniesContainer>
        </NanniesSection>
    )
};

export default Nannies;