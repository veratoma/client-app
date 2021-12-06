import React from 'react';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';

export const Blog = () => {
    return (

        <div><MenuList></MenuList>
            <MiniBanner title={'Блог'}></MiniBanner>
            <FooterList></FooterList>
        </div>
    )
};
