# view-finder

Hello ITERATION GROUP welcome to our codebase! We are adding comments to guide you.
We will use STRETCH and REFACTOR as keywords to mark places you might want to check out,
ctrl-F to find them!





Stretch Goals we had in mind:
1. give the ability to add captions to locations that already exist 
    --the SQL database is built to accomodate this
2. add the ability to uplad and store photos for places both on creation and later to existing locations
3. make the map interactive and able to accept a location pin by clicking
4. maintain a users database
5. location search


**A note about the database:
The database is made of 3 tables (there are more there that were there when we made it through ELephant SQL):
1. locations
2. captions
3. users

They are set up to implement a user base.



We ran into an issue with npm install, and ran the following commands to get past it:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

command -v nvm

nvm install --lts

nvm ls

npm --version

npm install


We referred to this stackoverflow post: https://stackoverflow.com/questions/68896696/having-trouble-installing-npm-on-mac-m1
