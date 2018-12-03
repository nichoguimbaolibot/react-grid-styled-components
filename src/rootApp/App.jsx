import React, { Component } from 'react';
import Button from '../components/Button'
import animalColors from '../styled/partials/animal-color'
import styled from 'styled-components'

const ColumnDiv = styled.div``
const RowDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
  text-align: center;
`
const Title = styled.h1`
  color: lightblue;  
  text-align: center;
`

const ButtonGenerateNumber = styled(Button)`
  padding: 5px 10px;
  border-color: lightblue;
  outline: none;
  width: 200px;
  min-width: 100px;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content : space-between;
  color: lightred;
  background: lightgrey;
`
const GeneratedNumberDiv = styled.div`
  
  padding: 40px;
  margin: 20px;
  border: 1px solid red;
  border-radius: 5px;
`

const GeneratedNumberSpan = styled.span`
  font-size: 20px;
  color: ${animalColors.bluebird};
`

class App extends Component {
  state = {
    randomNumbers: 0,
  }

  handleButtonTest = () => {
    const generateRandomNumbers = Math.floor(Math.random()*1000)
    this.setState({randomNumbers: generateRandomNumbers})
  }

  render() {
    return (
      <SectionWrapper>
        <Title>
          Test Styled Components
        </Title>
          <ColumnDiv />
          <ButtonGenerateNumber title="generate random numbers" onClick={this.handleButtonTest}>
            Generate Random Numbers
          </ButtonGenerateNumber>
          <ColumnDiv />
          <RowDiv>
          <ColumnDiv />
            <GeneratedNumberDiv>
                <GeneratedNumberSpan>
                  {this.state.randomNumbers}
                </GeneratedNumberSpan>
            </GeneratedNumberDiv>
            <ColumnDiv />
          </RowDiv>
      </SectionWrapper>
    );
  }
}

export default App;
