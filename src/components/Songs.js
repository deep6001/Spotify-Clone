const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FLa%20Casa%20De%20Papel%20-%20Bella%20Ciao%20%5BLyrics%5D%20(Money%20Heist).mp3?alt=media&token=55969ec0-e4c6-4c0a-9f43-ea57ab0a9ccb",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FBella%20Ciao.jpeg?alt=media&token=0ae582c6-0c8f-4d4f-885c-517aa50d6085",
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FBeast%20Mode%20-%20Official%20Lyric%20Video%20%20Beast%20%20Thalapathy%20Vijay%20%20Sun%20Pictures%20%20Nelson%20%20Anirudh.mp3?alt=media&token=5fbbaffe-a6e1-47d2-b780-e77b7dda0cd3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FBeast.jpeg?alt=media&token=c9d00e8b-849f-47ab-9886-4ef7ec056cd4",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FJoker%20Music%20Video%20%20Rock%20%26%20Roll%20Part%202%20-%20Gary%20Glitter.mp3?alt=media&token=b57e0ef2-5daa-496e-8318-32baf1d4242e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FJoker%20-%20Rock%20and%20Roll.jpeg?alt=media&token=1f8b1c68-57b7-4f3e-a323-8e8247b344b6",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FI'm%20a%20Peaky%20Blinder%20(%20Official%20Video%20).mp3?alt=media&token=3583660b-1c3c-45b8-80fd-97801b506733",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FI%20Am%20A%20Peaky%20Blinder.jpeg?alt=media&token=0f9dea8b-1069-4a04-a713-7b7338b204cb",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FValimai%20-%20Naanga%20Vera%20Maari%20Video%20%20Ajith%20Kumar%20%20Yuvan%20Shankar%20Raja.mp3?alt=media&token=0d2164d2-2a8e-4db5-a66b-9132174d7319",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FNaanga%20Vera%20Maari.jpeg?alt=media&token=3b5fe32b-dec0-4918-b32b-41e5d978dbd3",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FWhite%20Town%20-%20Your%20Woman%20(The%20White%20Panda%20Remix%20ft.%20Dorrough)%20(Thomas%20Shelby)%20(Unofficial%20Video).mp3?alt=media&token=aa252b98-6fe1-4f00-9ed3-ed61fe16a314",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FWhite%20Town.jpeg?alt=media&token=e5c33ccc-d606-4be1-9872-71f04289be54",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FCharlie%20%20Pularikalo%20Song%20Video%20%20Dulquer%20Salmaan%2C%20Parvathy%20%20Official.mp3?alt=media&token=4f7b3aa0-3f41-4709-ac73-d9825b9f7596",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FCharlie.jpeg?alt=media&token=764ec40f-fe70-43b5-bbfd-2cf960d94ab3",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FFuture%20-%20Mask%20Off%20(Official%20Music%20Video).mp3?alt=media&token=08f5962b-8edc-472c-8856-d6a0262fddb4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2FMask%20Off.jpeg?alt=media&token=f10ccfe4-cdc8-4f48-ad38-36d038a00637",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FDavid%20Guetta%20-%20Hey%20Mama%20(Official%20Video)%20ft%20Nicki%20Minaj%2C%20Bebe%20Rexha%20%26%20Afrojack.mp3?alt=media&token=5c634ee3-d970-42ba-95fd-a9785e6281cc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2Fheymama.jpeg?alt=media&token=9ea98165-26b3-4534-9714-f94caf545ca8",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/songs%2FCVRTOON%20-%20Plevne%20(Acoustic%20Version).mp3?alt=media&token=7e6822f7-8b79-4eb2-b62f-65572ab45677",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-8fbc2.appspot.com/o/img%2Fturkish.jpeg?alt=media&token=10b2c62e-2cf8-4166-8a3e-ca4f0346694d",
    },
  ];
  
  export { Songs };