import "./Testimonial.scss";
import calendar from "../../assets/svgs/calendar.svg";
import folder from "../../assets/svgs/testimonial_course.svg";
import quotations from "../../assets/svgs/quotations-1.svg";
import { useState } from "react";

const Testimonial = ({ name, date, course, comment, active, id }) => {
  const cardClass = active ? "testimonial testimonial--active" : "testimonial";
  const [filterComment, setFilterComment] = useState(true);

  const charLimit = 400;
  const filteredComment = () => {
    return comment.slice(0, charLimit) + "...";
  };
  const handleClick = () => {
    setFilterComment(!filterComment);
  };

  const textJSX = (
    <>
      {comment.length > charLimit && filterComment
        ? filteredComment()
        : comment}
      {comment.length > charLimit && (
        <>
          <label htmlFor={id} className="testimonial__comment-button-label">
            Toggle additional testimonial text
          </label>
          <button
            id={id}
            className="testimonial__comment-button"
            onClick={handleClick}
            aria-label={`click to ${filterComment ? "show more" : "show less"}`}
          >
            {filterComment ? "show more" : "show less"}
          </button>
        </>
      )}
    </>
  );

  return (
    <div className={cardClass} data-testid={name}>
      <h3 className="testimonial__header">{name}</h3>
      <div className="testimonial__details">
        <p className="testimonial__detail">
          <img src={calendar} alt="calendar" /> {date}
        </p>
        <p className="testimonial__detail">
          <img src={folder} alt="" /> {course}
        </p>
      </div>
      <p className="testimonial__comment">{textJSX}</p>
      <img
        className="testimonial__quotations testimonial__quotations--1"
        src={quotations}
        alt="quotation marks"
      />
      <img
        className="testimonial__quotations testimonial__quotations--2"
        src={quotations}
        alt="quotation marks"
      />
    </div>
  );
};

export default Testimonial;
