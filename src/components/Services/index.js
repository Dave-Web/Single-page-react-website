import React from 'react';
import Icon4 from '../../images/ModernDesigns.svg';
import Icon5 from '../../images/Maintenance.svg';
import Icon6 from '../../images/Secure_server.svg';
import { ServicesContainer, ServicesWrapper,  ServicesCard, ServicesH1, ServicesH2,ServicesH3, ServicesP, ServicesIcon  } from './servicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon img src={Icon4} />
                    <ServicesH2>Web/ App Development</ServicesH2>
                    {/* <ServicesH3>Web Applications and Design</ServicesH3>
                    <ServicesH3>Mobile application</ServicesH3>
                    <ServicesH3>Graphic Design</ServicesH3> */}
                    <ServicesP> It takes effort and expertise to deliver flawless web applications, and that’s in fact what you can and should expect from your web development team. With fobro, you leave your product in good hands. You can be sure that the product team will strive for the highest quality of back-end as well as front-end experience.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon img src={Icon5} />
                    <ServicesH2> IT Support</ServicesH2>
                    {/* <ServicesH3>Server maintenance</ServicesH3>
                    <ServicesH3>Network Maintenance</ServicesH3>
                    <ServicesH3>Firewall/ Network Security</ServicesH3>
                    <ServicesH3>VPN and Remote Access</ServicesH3>
                    <ServicesH3>24/7 Monitoring</ServicesH3> */}
                    <ServicesP>With any modern business, there is a need to utilize technology efficiently. Even the most basic of IT systems will require some support eventually. Without a quality support structure in place, you can open your organization to devastating downtimes or potential losses. That is why Tech Company is your best partner to significantly benefit your business.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon img src={Icon6} />
                    <ServicesH2> Cloud Services </ServicesH2>
                    {/* <ServicesH3> Cloud and Email Services </ServicesH3>
                    <ServicesH3>Email Service Setup and Migration</ServicesH3>
                    <ServicesH3>Access Data Anywhere</ServicesH3>
                    <ServicesH3>Email Retention, Archiving, and Ownership</ServicesH3>
                    <ServicesH3>Backup solutions</ServicesH3> */}
                    <ServicesP> Tech Company us partnered with the best cloud service providers to bring you the best loud infrastrature. Our cloud services range from email Service Setup and Migration, access Data Anywhere, email Retention, Archiving, and Ownership; Backup  </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            

            
        </ServicesContainer>
    )
}

export default Services
