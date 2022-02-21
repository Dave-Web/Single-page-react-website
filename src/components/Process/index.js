import React from 'react';
import Icon1 from '../../images/mobile_testing.svg';
import Icon2 from '../../images/develop_app.svg';
import Icon3 from '../../images/Remote_team.svg';
import  { ProcessContainer, ProcessWrapper,  ProcessCard, ProcessH1, ProcessH2, ProcessP, ProcessIcon } from './ProcessElements'
const Process = () => {
    return (
        <ProcessContainer id="process">
            <ProcessH1> 
                Our Development Process
            </ProcessH1>
            <ProcessWrapper>
                <ProcessCard>
                    <ProcessIcon img src={Icon1} />
                    <ProcessH2>Discover</ProcessH2>
                    <ProcessP> We start evry new client interaction with an in-depth disovery call whre we get to know each other, discuss the client current and future objectives, and recommend the best course of acion </ProcessP>
                </ProcessCard>

                <ProcessCard>
                    <ProcessIcon img src={Icon2} />
                    <ProcessH2>Startegy</ProcessH2>
                    <ProcessP> Every end-to-end project of ours begin with bespoke pre-build strategy. From brand ID consutation to in-depth code reviews. We're here to set the stage for success. </ProcessP>
                </ProcessCard>

                <ProcessCard>
                    <ProcessIcon img src={Icon3} />
                    <ProcessH2>Design</ProcessH2>
                    <ProcessP> After we have comprehensive undrstanding of your brand, we'll be ready to move onto design. Each page or asset will be designd, reviewed, and given your stamp of approval. </ProcessP>
                </ProcessCard>
                <ProcessCard>
                    <ProcessIcon img src={Icon3} />
                    <ProcessH2>Build</ProcessH2>
                    <ProcessP> Whether we've just finished designing your new site or you're handing off finished design for us to develop, we're here to apply our trusted development process to your project. </ProcessP>
                </ProcessCard>
            </ProcessWrapper>

            
        </ProcessContainer>
    )
}

export default Process
