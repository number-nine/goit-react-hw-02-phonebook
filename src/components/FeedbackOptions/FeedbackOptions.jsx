import StringConverter from 'utilities/StringConverter';
import {Container, OptionButton} from 'components/FeedbackOptions/FeedbackOptions.styled'

const FeedbackOptions = ({ onLeaveFeedback, ...restProps }) => {
  return (
    <>
      <Container>
        {Object.keys(restProps).map(element => (
          <OptionButton
            type="button"
            key={element}
            name={element}
            onClick={onLeaveFeedback}
          >
            {StringConverter.capitalize(element)}
          </OptionButton>
        ))}
      </Container>
    </>
  );
};

export default FeedbackOptions;
