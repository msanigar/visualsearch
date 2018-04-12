#!/usr/bin/env node

import generateSchema from 'json-to-graphql';

/*
put your json (which should consist of either 1 object or an array of objects all the same type) on stdin.  Popping out of stdout will be a graphql schema derived from the input.  If multiple objects are input, it may be able to infer types better than if just one object is provided.

The schema will not necessarily be ready to run, where types of objects are questionable, you will have to fix things up!  And of course, you will sedulously add a description to each field.

still, it is better than typing everything in!


put this:
"json2graphql": "babel-node json2graphql.js"
in your list of scripts in package.json

then you can do stuff like:

npm run json2graphql <FileContainingJSON.json
or
(assuming you have copied a json object to the pasteboard):
pbpaste | npm run json2graphql

in both of those cases the generated graphql schema will go to the terminal, but I'm sure you can use your shell fu to figure out how to put it into a file (>MYFILE.gql) or onto the pasteboard (| pbcopy)!!!

Most useful command (IHMO, of course!) is when you've got the json all printed out in, say, the console or the postman window, select it all and copy it, then:

pbpaste | python -mjson.tool | npm run json2graphql | pbcopy

(the json.tool will sort the json by key name which means your graphql schema will be sorted...SO much handier)

and then go to where ever you want the graphql (probably in an editor window, which has a .js file open) and paste

Be sure to examine the output closely.  I have found that when there are subobjects, the subobject graphql _is_ created correctly, but the attributes of the subobject are _also_ merged into the attributes of the parent.  So, you may find that you need to remove these.  I did have a look to see if I could fix this in the source, but, let's face it: it is JavaScript.  Once you have driven a Cadillac (Swift), it isn't that it is difficult to go back to a Rambler, it is just that it is so laughably undesirable.

*/

const stdin = process.stdin;
const stdout = process.stdout;
let inputChunks = '';

stdin.setEncoding('utf8');

stdin.on('data', (chunk) => {
  inputChunks += chunk;
});

stdin.on('end', () => {
  const parsed = JSON.parse(inputChunks);
  stdout.write(generateSchema(parsed));
  stdout.write('\n');
});
