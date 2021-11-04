import {render, screen} from '@testing-library/react';
import DirectList from './DirectList.jsx';

const data = ['html', 'css', 'js' ];
console.log(data);

describe('List component', () => {
    
    it('List renders', () =>{
        render(
        <DirectList cards={data}/>
        );

        expect(screen.getByText('zaharchuk_u')).toBeInTheDocument(); 
    });

});