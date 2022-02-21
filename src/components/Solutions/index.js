import React from 'react';
import Icon1 from '../../images/mobile_testing.svg';
import Icon2 from '../../images/develop_app.svg';
import Icon3 from '../../images/Remote_team.svg';
import { SolutionsContainer, SolutionsWrapper,  SolutionsCard, SolutionsH1, SolutionsH2, SolutionsP, SolutionsIcon  } from './SolutionsElements'
const Solutions = () => {
    return (
        <SolutionsContainer id="solutions">
            <SolutionsH1> Solutions </SolutionsH1>
            <SolutionsWrapper>
                <SolutionsCard>
                    <SolutionsIcon img src={Icon1} />
                    <SolutionsH2>Associations/Sacco Web/App solutions</SolutionsH2>
                    <SolutionsP> IT solutions built specifically for your business. Find your solution. </SolutionsP>
                </SolutionsCard>

                <SolutionsCard>
                    <SolutionsIcon img src={Icon2} />
                    <SolutionsH2>Real Estate Management Systems</SolutionsH2>
                    <SolutionsP> IT solutions built specifically for your business. Find your solution. </SolutionsP>
                </SolutionsCard>

                <SolutionsCard>
                    <SolutionsIcon img src={Icon3} />
                    <SolutionsH2>Data Recovery Solutions</SolutionsH2>
                    <SolutionsP> IT solutions built specifically for your business. Find your solution. </SolutionsP>
                </SolutionsCard>
            </SolutionsWrapper>

            
        </SolutionsContainer>
    )
}

export default Solutions
