import styled from 'styled-components';

const StyledComponents = () => {
  const Block = styled.div`
    position: absolute;
    top: 40%;
    width: 100%;
    background: #fff;
    font-size: 48px;
    color: #008a83;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  `
  const Section = styled.section`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
  `
  const Main = styled.div`
    margin-bottom: 20px;
  `

  return (
    <>
      <Block>
        <Main>Hello world, I am styled-components! 😁</Main>
        <Section>This is a section</Section>
      </Block>
    </>
  )
}

export default StyledComponents;