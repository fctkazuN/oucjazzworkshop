/* ----- schedule取得 ----- */

import testEventsJson from "./testEvents.json";

const testEvents = testEventsJson.json;

type Props = {
  success: Function;
  failure: Function;
};

const getSchedule = (props: Props) => {
  fetch(`${process.env.REACT_APP_GET_SCHEDULE}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((respJson) => {
      console.log(respJson);
      if (respJson) {
        props.success(respJson);
      } else {
        // props.failure(respJson);
        props.failure(testEvents);
      }
    })
    .catch((error) => {
      console.log(error);
      props.success(testEvents);
      // props.failure(error);
    });
};

export default getSchedule;
