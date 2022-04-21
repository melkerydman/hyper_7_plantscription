import { Input, SearchContainer } from './styled';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <SearchContainer>
            <Input placeholder="Search for a product" />
            <Search
                style={{
                    color: 'grey',
                    fontSize: '1.6rem',
                }}
            />
        </SearchContainer>
    );
};

export default SearchBar;
