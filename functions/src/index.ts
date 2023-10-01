import axios from "axios";
import * as functions from "firebase-functions";

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      first_name: user.displayName,
      secret: user.uid,
      email: user.email,
    },
    { headers: { "Private-key": "fce31f37-77ad-4194-9b12-9694b03e561d" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.post("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "877ff8b8-0237-4a42-b186-60c46371cf03",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
