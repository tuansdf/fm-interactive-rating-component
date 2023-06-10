"use client";

import { useState } from "react";
import {
  Attribution,
  Container,
  RatingButton,
  StarButton,
  SubmitButton,
} from "~/components";
import { ThankYouIllustration } from "~/icons";
import classes from "./page.module.scss";

const ratings = [1, 2, 3, 4, 5];

export default function Home() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!selectedRating) return;
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <Container>
          <div className={classes["icon"]}>
            <StarButton />
          </div>
          <div>
            <div className={classes["title"]}>How did we do?</div>
            <p className={classes["content"]}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improving our offering!
            </p>
          </div>
          <div className={classes["rating-buttons"]}>
            {ratings.map((rating) => (
              <RatingButton
                key={rating}
                selected={rating === selectedRating}
                onClick={() => setSelectedRating(rating)}
              >
                {rating}
              </RatingButton>
            ))}
          </div>
          <SubmitButton type="button" onClick={submit}>
            Submit
          </SubmitButton>
        </Container>
      ) : (
        <Container className={classes["thank-you-container"]}>
          <ThankYouIllustration />
          <div className={classes["result"]}>
            You selected {selectedRating} out of 5
          </div>
          <div>
            <div className={classes["title"]}>Thank you!</div>
            <p className={classes["content"]}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don&apos;t hesitate to get in touch.
            </p>
          </div>
        </Container>
      )}
      <Attribution />
    </>
  );
}
