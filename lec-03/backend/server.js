import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "hello, how r u?",
  });
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke one",
      description: "This is the joke no one",
    },
    {
      id: 2,
      title: "Joke two",
      description:
        "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 3,
      title: "Joke three",
      description:
        "I told my wife she should embrace her mistakes. She gave me a hug.",
    },
    {
      id: 4,
      title: "Joke four",
      description:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 5,
      title: "Joke five",
      description: "I asked my dog what two minus two is. He said nothing.",
    },
    {
      id: 6,
      title: "Joke six",
      description:
        "Why can't you give Elsa a balloon? Because she'll let it go.",
    },
  ];

  res.status(200).send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
