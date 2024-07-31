import { useState } from 'react';
import PropTypes from 'prop-types';

function TextTruncator({text}) {
  const [showMore, setShowMore] = useState(false);

  const truncatedText = text.substring(0, 100);
  const restOfText = text.substring(100);

  return (
    <div>
      {showMore ? (
        <span>{text}</span>
      ) : (
        <>
          {truncatedText}
          {restOfText.length > 0 && (
            <span onClick={() => setShowMore(true)}>...more</span>
          )}
        </>
      )}
      {showMore && <span onClick={() => setShowMore(false)}>...read less</span>}
    </div>
  );
}

TextTruncator.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextTruncator;
