export default function consoleFunction(input) {
  if (helpMapper.has(input)) {
    return helpMapper.get(input);
  }
  return "Command not found";
}

let helpMapper = new Map([["about", "Hi there! I'm a software engineer!"]]);
helpMapper.set(
  "help",
  "The possible commands are:\n\rabout,\n\rclear,\n\rcontact,\n\rexperience,\n\rprojects,\n\rskills"
);
