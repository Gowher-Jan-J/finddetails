import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let user = [
  {
    id: 1,
    categoryId: 7,
    serviceName: "sks bus serice",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/01.jpg",
    featured: 1,
    serviceLocation: '["Erode","Perundurai","Thindal"]',
    servicePrice: "1500",
  },
  {
    id: 8,
    categoryId: 7,
    serviceName: "sks bus serice",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/09.jpg",
    featured: 1,
    serviceLocation:'["Erode","Trippur"]',
    servicePrice: "1200",
  },
  {
    id: 9,
    categoryId: 7,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/010.jpg",
    featured: 0,
    serviceLocation:'["Erode","trippur","chennai"]',
    servicePrice: "1200",
  },
  {
    id: 10,
    categoryId: 1,
    serviceName: "Tks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/02.jpg",
    featured: 0,
    serviceLocation:'["Chennimalai","Erode","Trippur"]',
    servicePrice: "1200",
  },
  {
    id: 11,
    categoryId: 7,
    serviceName: "Tks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/07.jpg",
    featured: 0,
    serviceLocation: '["Alabama","Coimbatore","Erode","Madurai","test"]',
    servicePrice: "1200",
  },
  {
    id: 12,
    categoryId: 7,
    serviceName: "Tks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/012.jpg",
    featured: 1,
    serviceLocation: '["Alabama","Coimbatore","Erode","Madurai","test"]',
    servicePrice: "1200",
  },
  {
    id: 13,
    categoryId: 1,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/013.jpg",
    featured: 0,
    serviceLocation: '["bangalore","Coimbatore","Erode","chennai",]',
    servicePrice: "1000",
  },
  {
    id: 14,
    categoryId: 7,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/014.jpg",
    featured: 0,
    serviceLocation: '["kerala","Chennai","Madurai",]',
    servicePrice: "1200",
  },
  {
    id: 15,
    categoryId: 7,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/017.jpg",
    featured: 0,
    serviceLocation: '["Alabama","Coimbatore","Madurai"]',
    servicePrice: "1200",
  },
  {
    id: 16,
    categoryId: 1,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/016.jpg",
    featured: 0,
    serviceLocation: '["Chennai","Erode"]',
    servicePrice: "1200",
  },
  {
    id: 17,
    categoryId: 7,
    serviceName: "sks bus service",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique libero aspernatur, amet provident inventore neque non modi dolor vitae debitis? Cumque placeat itaque amet quis atque dolorem, voluptatem in?",
    serviceImages: "/images/015.jpg",
    featured: 0,
    serviceLocation: '["Coimbatore","Erode","Madurai"]',
    servicePrice: "1200",
  },
  {
    id: 25,
    categoryId: 6,
    serviceName: "sks bus service",
    serviceDescription: "test",
    serviceImages: "/images/RootDelivery1682683055072.jpg",
    featured: 0,
    serviceLocation: '["chennai","Coimbatore","Erode"]',
    servicePrice: "10000",
  },
  {
    id: 26,
    categoryId: 6,
    serviceName: "sks bus service",
    serviceDescription: "dish tv",
    serviceImages: "/images/RootDelivery1682702581649.jpeg",
    featured: 0,
    serviceLocation: '["Alabama","Erode","Madurai"]',
    servicePrice: "1234",
  },
  {
    id: 27,
    categoryId: 3,
    serviceName: "sks bus service",
    serviceDescription: "ssss",
    serviceImages: "/images/RootDelivery1682703300075.png",
    featured: 0,
    serviceLocation: '["Coimbatore","Erode","chennai"]',
    servicePrice: "5464",
  },
];
app.post("/user", async (req, res) => {
  let location = req.body.location;
    console.log(location);


  let a = [];
  if (Object.keys(req.body).length === 0) {
    console.log("choose location");
  

    res.json({ Location: "choose location"});
  } else if (Object.keys(req.body).length !== 0) {
    for (let i = 0; i < user.length; i++) {
      if (user[i].serviceLocation.includes(location)) {
        a.push(user[i]);
      }
    }
    if (a.length != 0) {
      res.json(a);
    } else {
      console.log({ "message":"data not found" });
      res.json({ "message": "data not found" });
    }
  } else {
    console.log({ "message": " no data found" });
    res.json({ "message": "no data found" });
  }
});


app.listen(3000, () => {
  console.log("server is running");
});
