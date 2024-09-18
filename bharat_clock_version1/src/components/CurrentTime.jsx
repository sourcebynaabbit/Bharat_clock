let CurrentTime = () => {
  let time = new Date();
  return (
    <>
      <p>The current date is {time.toLocaleDateString()}</p>
      <p>The current time in Bharat is {time.toLocaleTimeString()}</p>
    </>
  );
};

export default CurrentTime;
