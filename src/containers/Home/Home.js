import React, { Component } from 'react';
import {Container} from 'theme/grid';
import {Image,
        Webdevimage,
        RevealP
} from './Home.style';

class Home extends Component {
    render() {
        return (
            <Container>
                
               <Webdevimage> 
               <h1> NK Allianz</h1>
               <h6>Websites, Apps and Services</h6>
               </Webdevimage>
                <RevealP>Iusto voluptatem a praesentium molestias est sit dolor. 
                Iure est animi et nostrum amet aut consectetur.
                 Sed culpa architecto commodi. 
                 Ad porro voluptatem temporibus ut.
                 Iusto voluptatem a praesentium molestias est sit dolor. 
                 Iure est animi et nostrum amet aut consectetur.
                  Sed culpa architecto commodi. 
                  Ad porro voluptatem temporibus ut.
                  </RevealP>
                 </Container>

        );
    }
}

export default Home;