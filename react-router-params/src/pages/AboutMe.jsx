import React from 'react';

function AboutMe(props) {

  const goBackHandler = () => {
    props.history.goBack();
  }

  const goToPhotosHandler = () => {
    props.history.push('/photos');
  }

  return (
    <>
      <h1>About Me</h1>
      <button onClick={goBackHandler}>Go Back</button>
      <button onClick={goToPhotosHandler}>You could see my own photos clicking here!</button>
    </>
  );
}

export default AboutMe;
