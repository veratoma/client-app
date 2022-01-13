import React from 'react';
import '../../scss/style.scss';
import { MenuList } from '../../components/MenuList/MenuList';
import { FooterList } from '../../components/FooterList/FooterList';
import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
import { Blog } from '../../Data/ServicesData';
import { useParams } from 'react-router';
import { BlogCard } from '../../components/BlogCard/BlogCard';


export const BlogDetail = () => {

    const params = useParams();

    const blog = Blog.filter(s => s.id === params.title)[0];

    const blogIndex = Blog.indexOf(blog);

    let prevBlogId = null
    if (blogIndex > 0) {
        prevBlogId = Blog[blogIndex - 1].id;
    }

    let nextBlogId = null;
    if (blogIndex < Blog.length) {
        nextBlogId = Blog[blogIndex + 1].id;
    }


    console.log(Blog[blogIndex - 1])

    return (
        <div>
            <MenuList></MenuList>
            <MiniBanner text={blog.title} title={'Блог'} url={'blog'} ></MiniBanner>
            <BlogCard blog={blog} prevBlogId={prevBlogId} nextBlogId={nextBlogId}></BlogCard>
            <FooterList></FooterList>
        </div>
    )
};