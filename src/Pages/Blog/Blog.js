import React from 'react';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
import { GalleryBlog } from '../../components/GalleryBlog/GalleryBlog';
import '../../scss/style.scss';

export const Blog = () => {
    return (
        
        <div>
            <MenuList></MenuList>
            <MiniBanner title={'Блог'}></MiniBanner>
            <GalleryBlog></GalleryBlog>
            <FooterList></FooterList>
        </div>
    )
};
