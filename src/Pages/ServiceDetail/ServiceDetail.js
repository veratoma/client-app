import React from 'react';
 import '../../scss/style.scss';
 import { MenuList } from '../../components/MenuList/MenuList';
 import { FooterList } from '../../components/FooterList/FooterList';
 import { MiniBanner } from '../../components/MiniBanner/MiniBanner';
 import { useParams } from 'react-router';
 import { ServData } from '../../Data/ServicesData';
 import { ServicesDeployed } from '../../Data/ServicesDeployed/ServicesDeployed';


 export const ServicesDetail = () => {

    
    const params = useParams();

    const service = ServData.filter(s => s.link == params.text)[0];

    return (
        <div>
        

            <MenuList></MenuList>
            <MiniBanner text = {service.text}
            title = {'Услуги'} > 
            {/* <Link className="breadcrumb-item active" to="../services"> <span>Услуги </span></Link>  */}
            </MiniBanner>
            <ServicesDeployed></ServicesDeployed>
            
            <FooterList text = {service.text}></FooterList>
            </div>)};