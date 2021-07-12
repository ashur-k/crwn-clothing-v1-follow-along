import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/director.selectors'

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss'

const Directory = ({ sections }) =>  (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
    );

const mapStatetoProps = createStructuredSelector({

   sections: selectDirectorySections

})

export default connect(mapStatetoProps) (Directory);