import React from 'react'
import {Container} from './StyledAgenda';



const Agenda = () => {

    const data ='https://calendly.com/panaceia?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=12ef2a';

    return (
        <Container> 
        <div data-url={data}></div>
        </Container>
    )
}

export default Agenda;