/* ----- member取得 ----- */

import dayjs from "dayjs";
import { SetMemberPayload } from "../../state/slices/memberSlice";
import membersJson from "./members.json";

const members = membersJson.members;

type Props = {
  success: React.Dispatch<SetMemberPayload>;
  failure: Function;
};

const getMemberApi = (props: Props) => {
  fetch(`${process.env.REACT_APP_E}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((respJson) => {
      console.log(respJson);
      if (respJson) {
        props.success({
          thisYear: dayjs().year(),
          member: respJson,
        });
      } else {
        // props.failure(respJson);
        props.failure(respJson);
      }
    })
    .catch((error) => {
      console.log(error);
      props.success({
        thisYear: dayjs().year(),
        member: members,
      });
      // props.failure(error);
    });
};

export default getMemberApi;
