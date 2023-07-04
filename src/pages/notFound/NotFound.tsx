import {
  Container,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";
import {
  ButtonWrapper,
  HomeButton,
  NotFoundPageContainer,
  NotFoundPageDescription,
  NotFoundPageHeading,
  NotFoundPageSubHeading,
} from "./NotFound.style";

const NotFound = () => {
  return (
    <Container width="90%">
      <OpacityAnimation>
        <Wrapper>
          <NotFoundPageContainer>
            <div>
              <NotFoundPageHeading>404</NotFoundPageHeading>
              <NotFoundPageSubHeading>
                OOPS! PAGE NOT FOUND
              </NotFoundPageSubHeading>
              <NotFoundPageDescription>
                Sorry, the page you're looking for doesn't exist. If you think
                something is broken, report a problem.
              </NotFoundPageDescription>
              <ButtonWrapper>
                <StyledLink to="/">
                  <HomeButton>Back to HomePage</HomeButton>
                </StyledLink>
              </ButtonWrapper>
            </div>
          </NotFoundPageContainer>
        </Wrapper>
      </OpacityAnimation>
    </Container>
  );
};

export default NotFound;
