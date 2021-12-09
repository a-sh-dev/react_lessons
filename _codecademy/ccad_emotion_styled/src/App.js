/** @jsxImportSource @emotion/react */

// import `css`and `ThemeProvider` from "@emotion/react" package
// import styled components, theming and animation from "./styles.js" file

import { css, ThemeProvider } from '@emotion/react';
import logo from './logo.png';
import hotels from './hotels';
import {
  theme,
  CardWrapper,
  ImageWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ActionsWrapper,
  PrimaryButton,
  SecondaryButton,
  LogoSpin,
} from './styles';

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <ThemeProvider theme={theme}>
      <main
        css={(theme) => ({
          color: theme.colors.primary,
          background: theme.colors.secondary,
          height: '1200px',
          fontFamily: theme.fonts.primary,
        })}
      >
        <img
          src={logo}
          alt="logo"
          css={css`
            display: absolute;
            margin-top: 15px;
            margin-left: 15px;
            height: 100px;
            width: 100px;
            animation: ${LogoSpin} 10s linear infinite;
          `}
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-self: center;
            gap: 15px;
            padding: 20px;
            @media (max-width: 900px) {
              display: grid;
            }
          `}
        >
          {hotels.map((hotel) => {
            const { id, src, alt, title, description } = hotel;
            return (
              <CardWrapper key={id}>
                <ImageWrapper src={src} alt={alt} />
                <TextWrapper>
                  <TitleWrapper>{title}</TitleWrapper>
                  <DescriptionWrapper>{description}</DescriptionWrapper>
                </TextWrapper>
                <ActionsWrapper>
                  <PrimaryButton>Details</PrimaryButton>
                  <SecondaryButton>Book</SecondaryButton>
                </ActionsWrapper>
              </CardWrapper>
            );
          })}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
