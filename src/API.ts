import axios from "axios";
import { useNavigate } from "react-router-dom";

const domain = process.env.REACT_APP_DOMAIN;

interface TypeDataLogged {
  id: string;
  nickname: string;
  pictureURL: string;
  isTwoFactorAuthEnabled: boolean;
  status: string;
}

export function CheckToken() {
  const navigate = useNavigate();
  axios
    .get(`${domain}/users/logged-user`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then()
    .catch((error) => {
      if (error.response.data.statusCode === 401) {
        navigate("/Login");
      }
    });
}

export function CheckTokenLogin(getRes: any) {
  const navigate = useNavigate();
  axios
    .get(`${domain}/users/logged-user`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then(() => {
      getRes("200");
      navigate("/Home");
    })
    .catch((error) => {
      getRes("error");
    });
}

interface TypeDataOnline {
  id: string;
  nickname: string;
  pictureURL: string;
}

interface TypeDataProfileUser {
  friendsNumber: number;
  id: string;
  nickname: string;
  pictureURL: string;
}

interface TypeDataUsers {
  id: string;
  nickname: string;
  pictureURL: string;
  isFriendToLoggedUser: boolean;
}

interface TypeDataProfileUser {
  friendsNumber: number;
  id: string;
  isBlockedByLoggedUser: boolean;
  isFriendToLoggedUser: boolean;
  nickname: string;
  pictureURL: string;
  status: string;
  winsNumber: number;
  losesNumber: number;
}

interface TypedataFriend {
  id: string;
  nickname: string;
  pictureURL: string;
}

export function getDataUserLogged(getRes: (res: TypeDataLogged) => void) {
  getRes({
    id: "1",
    nickname: "mouassit",
    pictureURL:
      "https://cdn.intra.42.fr/users/2cc53519ab737304bcdd74e4125c3e61/mouassit.jpg",
    isTwoFactorAuthEnabled: false,
    status: "online",
  });
}

export function getDataUsers(getRes: (res: TypeDataUsers[]) => void) {
  getRes([
    {
      id: "2",
      nickname: "hnaji-el",
      pictureURL:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
      isFriendToLoggedUser: true,
    },
    {
      id: "3",
      nickname: "ayafdel",
      pictureURL:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
      isFriendToLoggedUser: false,
    },
  ]);
}

export function getOneUser(
  getRes: (res: TypeDataProfileUser) => void,
  id: string
) {
  getRes({
    friendsNumber: 2,
    id: "2",
    isBlockedByLoggedUser: false,
    isFriendToLoggedUser: false,
    nickname: "hnaji-el",
    pictureURL:
      "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
    status: "online",
    winsNumber: 1,
    losesNumber: 1,
  })
}

export function getFriendsOneUser(
  getRes: (res: TypedataFriend[]) => void,
  id: string
) {
  getRes([
    {
      id: "2",
      nickname: "hnaji-el",
      pictureURL:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
    },
    {
      id: "3",
      nickname: "ayafdel",
      pictureURL:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
    },
  ]);
}

export async function addFriend(id: string) {
  await axios
    .post(
      `${domain}/users/add-friend/${id}`,
      {},
      {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": `${domain}` },
      }
    )
    .then((res) => {})
    .catch((error) => {});
}

export async function unfriend(id: string) {
  await axios
    .delete(`${domain}/users/remove-friend/${id}`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then((res) => {})
    .catch();
}

export async function blockFriend(id: string) {
  await axios
    .patch(
      `${domain}/users/block-friend/${id}`,
      {},
      {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": `${domain}` },
      }
    )
    .then((res) => {})
    .catch();
}

export function unBlockFriend(id: string) {
  axios
    .patch(
      `${domain}/users/unblock-friend/${id}`,
      {},
      {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": `${domain}` },
      }
    )
    .then((res) => {})
    .catch();
}

export function getFriendOnline(getRes: (res: TypeDataOnline[]) => void) {
  getRes([
    {
      id: "2",
      nickname: "hnaji-el",
      pictureURL:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
    },
    {
      id: "3",
      nickname: "ayafdel",
      pictureURL:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
    },
  ]);
}

//------------------------ chat --------------------------------

export function getFriendChat() {
  axios
    .get(`${domain}/chat/DM-with-all-users`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then((res: any) => {})
    .catch();
}

export function getDmUsers(getRes: any) {
  getRes([
    {
      id: "2",
      username: "hnaji-el",
      picture:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
      conversation: [
        {
          message: "Hello my friend Mouassit",
          type: "friend",
          time: "10:00",
        },

        {
          message: "How are you my friend Hnaji-el",
          type: "user",
          time: "10:15",
        },

        {
          message: "Where are you from ?",
          type: "friend",
          time: "11:20",
        },

        {
          message: "I'am from Morocco",
          type: "user",
          time: "12:00",
        },
      ],
    },

    {
      id: "3",
      username: "ayafdel",
      picture:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
      conversation: [
        {
          message: "Hello my friend Mouassit",
          type: "friend",
          time: "10:00",
        },

        {
          message: "How are you my friend Ayafdel",
          type: "user",
          time: "10:15",
        },

        {
          message: "Where are you from ?",
          type: "friend",
          time: "11:20",
        },

        {
          message: "I'am from Morocco",
          type: "user",
          time: "12:00",
        },
        {
          message: "What about you ?",
          type: "user",
          time: "12:01",
        },

        {
          message: "I'am from Morocco to",
          type: "friend",
          time: "12:05",
        },
      ],
    },
  ]);
}

export function getAllChannels(getRes: any) {
  getRes([
    {
      id: 1,
      name: "channel 01",
      picture:
        "https://static.vecteezy.com/system/resources/previews/006/988/723/original/boy-playing-game-gamer-logo-free-vector.jpg",
      members: "10",
      latestMessage: "welcome to your channel",
      role: "owner",
      conversation: [
        {
          type: "member",
          message: "hey 😃",
          time: "10:00",
          picture:
            "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
        },
        {
          type: "user",
          message: "welcome to your channel",
          time: "10:45",
        },
      ],
    },

    {
      id: 2,
      name: "channel 02",
      picture:
        "https://cdna.artstation.com/p/assets/images/images/023/459/708/large/vaibhav-verma-game-logo.jpg?1579270067",
      members: "10",
      latestMessage: "welcome to your channel",
      role: "admin",
      conversation: [
        {
          type: "member",
          message: "New channel",
          time: "17:00",
          picture:
            "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
        },
        {
          type: "user",
          message: "It's a good channel",
          time: "17:15",
        },
      ],
    },
  ]);
}

export function getChannelsDm() {
  axios
    .get(`${domain}/chat/room-message`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then((res) => {})
    .catch();
}

export async function CreateChannel(getRes: any, data: any) {
  await axios
    .post(`${domain}/chat/create-room`, { data }, { withCredentials: true })
    .then((res) => {
      getRes(res);
    })
    .catch((error) => {
      getRes("error");
    });
}

export function getFriendChannel(getRes: any, nameChannel: string) {
  getRes([
    {
      id: "2",
      nickname: "hnaji-el",
      pictureURL:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
      isFriendToLoggedUser: true,
    },
    {
      id: "3",
      nickname: "ayafdel",
      pictureURL:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
      isFriendToLoggedUser: false,
    },
  ]);
}

export function getMembersChannel(getRes: any, nameChannel: string) {
  getRes([
    {
      role: "admin",
      id: "2",
      username: "hnaji-el",
      pictureLink:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
      isFriendToLoggedUser: true,
    },
    {
      id: "3",
      username: "ayafdel",
      pictureLink:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
      isFriendToLoggedUser: false,
    },
  ]);
}

export async function addToRoom(data: any) {
  await axios
    .post(`${domain}/chat/add-to-room`, { data }, { withCredentials: true })
    .then()
    .catch();
}

export async function setAdmin(data: any) {
  await axios
    .post(`${domain}/chat/set-admin`, { data }, { withCredentials: true })
    .then()
    .catch();
}

export async function setBlock(data: any) {
  await axios
    .patch(`${domain}/chat/ban`, { data }, { withCredentials: true })
    .then()
    .catch();
}

export async function setKick(data: any) {
  await axios
    .patch(`${domain}/chat/kick`, { data }, { withCredentials: true })
    .then()
    .catch();
}

export async function setMute(data: any) {
  await axios
    .patch(`${domain}/chat/muted`, { data }, { withCredentials: true })
    .then()
    .catch();
}

export async function leaveRoom(name: string) {
  await axios
    .post(`${domain}/chat/quite-room`, { name }, { withCredentials: true })
    .then()
    .catch();
}

export async function deleteRoom(name: string) {
  await axios
    .delete(`${domain}/chat/delete-room/${name}`, {
      withCredentials: true,
    })
    .then()
    .catch();
}

export function joinRoom(getRes: any, data: any) {
  axios
    .post(`${domain}/chat/join-room`, { data }, { withCredentials: true })
    .then((res) => {
      getRes(res.data);
    })
    .catch();
}

export async function editPicture(file: any) {
  let fd: FormData = new FormData();
  fd.append("file", file);

  await axios
    .post(`${domain}/users/upload-profile-picture`, fd, {
      withCredentials: true,
    })
    .then()
    .catch();
}

export async function editNickname(getRes: any, nickname: string) {
  let obj = {
    nickname: nickname,
  };
  await axios
    .patch(`${domain}/users/update_nickname`, obj, {
      withCredentials: true,
    })
    .then(() => {
      getRes("valid");
    })
    .catch(() => {
      getRes("invalid");
    });
}

export async function generateQrCode(getRes: any) {
  await axios
    .post(
      `${domain}/2fa/generate`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      getRes(res.data);
    })
    .catch();
}

export async function QrcodeValidation(getRes: any, code: string) {
  let obj = {
    twoFactorAuthCode: code,
  };
  await axios
    .post(`${domain}/2fa/verification`, obj, {
      withCredentials: true,
    })
    .then((res) => {
      getRes("valide");
    })
    .catch(() => {
      getRes("invalide");
    });
}

export async function turOnTfa() {
  await axios
    .post(
      `${domain}/2fa/turn-on`,
      {},
      {
        withCredentials: true,
      }
    )
    .then()
    .catch();
}

export async function turnOffTfa() {
  await axios
    .post(
      `${domain}/2fa/turn-off`,
      {},
      {
        withCredentials: true,
      }
    )
    .then()
    .catch();
}

export function getAchievements(getRes: any, id: string) {
  axios
    .get(`${domain}/users/game/achievement/${id}`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then((res) => {
      getRes(res.data);
    })
    .catch();
}

export function getMatchHistory(getRes: any, id: string) {
  getRes([
    {
      id: "2",
      nickname: "hnaji-el",
      pictureURL:
        "https://cdn.intra.42.fr/users/fa83d9b95ae3ef290cac43d9c4c1010d/hnaji-el.jpg",
      score: "2 - 5",
      gameState: "WIN",
    },
    {
      id: "3",
      nickname: "ayafdel",
      pictureURL:
        "https://cdn.intra.42.fr/users/cc4982ccc40e74b602bea75ae97172ff/ayafdel.jpg",
      score: " 5 - 4",
      gameState: "LOSE",
    },
  ]);
}

export async function logout() {
  await axios
    .get(`${domain}/auth/logout`, {
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": `${domain}` },
    })
    .then()
    .catch();
}
