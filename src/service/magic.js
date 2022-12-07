export async function aiLogic(command, messages, setMessages, args) {
  commands[command].action(messages, setMessages, args);
}

const commands = {
  help: {
    description: "Show all commands",
    action: (messages, setMessages) => {
      let tempMessages = [];

      let temp_id = 1;
      for (const command in commands) {
        tempMessages.push({
          id: temp_id++,
          text: "/" + command + " - " + commands[command].description + "",
        });
      }

      tempMessages.push({
        id: temp_id++,
        text: " -- -- -- -- ",
      });

      setMessages([...tempMessages, ...messages]);
    },
  },

  clear: {
    description: "Clear all messages",
    action: (messages, setMessages) => {
      setMessages([]);
    },
  },

  ask: {
    description: "Ask a question",
    action: (messages, setMessages, args) => {
      let tempMessages = [];
      let temp_id = 1;
      if (args === undefined) {
        tempMessages.push({
          id: temp_id++,
          text: "Please ask a question",
        });
        setMessages([...tempMessages, ...messages]);
        return;
      } else {
        let random = Math.floor(Math.random() * 5);

        switch (random) {
          case 0:
            tempMessages.push({
              id: temp_id++,
              text: "It is certain",
            });
            break;
          case 1:
            tempMessages.push({
              id: temp_id++,
              text: "No, definitely not",
            });
            break;
          case 2:
            tempMessages.push({
              id: temp_id++,
              text: "Without a doubt",
            });
            break;
          case 3:
            tempMessages.push({
              id: temp_id++,
              text: "It is unclear",
            });
            break;
          case 4:
            tempMessages.push({
              id: temp_id++,
              text: "You may rely on it",
            });
            break;
          case 5:
            tempMessages.push({
              id: temp_id++,
              text: "As I see it... No.",
            });
            break;
          default:
            tempMessages.push({
              id: temp_id++,
              text: "I don't know",
            });
            break;
        }
      }
      tempMessages.push({
        id: temp_id++,
        text: "Question: " + args,
      });
      tempMessages.push({
        id: temp_id++,
        text: "Answered by the 8 ball",
      });
      tempMessages.push({
        id: temp_id++,
        text: " -- -- -- -- ",
      });

      setMessages([...tempMessages, ...messages]);
    },
  },
};
