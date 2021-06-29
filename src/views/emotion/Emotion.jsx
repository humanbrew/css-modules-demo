/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled'

const Emotion = () => {
  const Section = styled.section`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
  `
  const mainStyle = css`
    margin-bottom: 20px;
  `

  return (
    <>
      <div
        css={css`
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
      `}
      >
        <div css={mainStyle} >hello world, I am Emotion! 😁</div>
        <Section>This is a section</Section>
      </div>
    </>
  )
}

export default Emotion;