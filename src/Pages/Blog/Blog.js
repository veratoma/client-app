import React from 'react';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
import { Contacts } from '../../components/Contacts/Contacts';
import { GalleryBlog } from '../../components/GalleryBlog/GalleryBlog';

export const Blog = () => {
    return (

        <div><MenuList></MenuList>
            <MiniBanner title={'Блог'}></MiniBanner>
            <GalleryBlog></GalleryBlog>
            <Contacts></Contacts>
            <FooterList></FooterList>
        </div>
    )
};
