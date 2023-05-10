import StringConverter from 'utilities/StringConverter';
import Notification from 'components/Notification';

const Statistics = props => {
  const calculateTotal = () => {
    return Object.values(props).reduce((total, current) => total + current, 0);
  };
  const calculatePositivePresentage = () => {
    return (
      Math.round((props.good * 100) / calculateTotal())
    );
  };
  return calculateTotal() ? (
    <>
      {Object.keys(props).map(element => (
        <p key={element}>
          {StringConverter.capitalize(element)}: {props[element]}
        </p>
      ))}
      <p>Total: {calculateTotal()}</p>
      <p>Positive feedback: {calculatePositivePresentage()}%</p>
    </>
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;
