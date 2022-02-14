To run MongoDB (i.e. the mongod process) as a macOS service, run:
  brew services start mongodb-community@5.0

brew services list

To stop a mongod running as a macOS service, use the following command as needed:
  brew services stop mongodb-community@5.0

To run MongoDB (i.e. the mongod process) manually as a background process, run:

For macOS running on Apple M1 processors:
   mongod --config /opt/homebrew/etc/mongod.conf --fork

To stop a mongod running as a background process, connect to the mongod using mongosh, and issue the shutdown command as needed.

--> To kill
sudo pkill -f mongod

-->  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/
 IMPORTANT
 Starting with macOS 10.15 Catalina, Apple restricts access to the MongoDB default data directory of /data/db.   <<<<--------- see this !
 On macOS 10.15 Catalina, you must use a different data directory, such as /usr/local/var/mongodb

 /usr/local/var/mongodb

Create data directory: sudo mkdir -p /usr/local/var/mongodb
Create log directory: sudo mkdir -p /usr/local/var/log/mongodb

Set permissions for the data and log directories
sudo chown vinayvillavan /usr/local/var/mongodb
sudo chown vinayvillavan /usr/local/var/log/mongodb

Go to .....
cd /usr/local/mongodb/bin

Then, run mongod with command-line parameters
mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork


The databases are stored in the /usr/local/var/mongodb/
The mongo logs can be found at /usr/local/var/log/mongodb/
The mongo binaries are here: /usr/local/mongodb/bin
The mongod.conf file is here: /usr/local/etc/mongod.conf


======>>> FOLLOW THESE STEPS <<<=========
1. Go to .....
    cd /usr/local/mongodb/bin

2. Then, run mongod with command-line parameters
   mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork

3. Open another terminal Cntrl + T and from Fruits DB directory,
  node app.js
  you should see this: Connnected successfully to server


========>>> OR FOLLOW THIS ALT PATH <<==========  https://zellwk.com/blog/install-mongodb/
TERMINAL
* When you first open Terminal Type : bash
* Go to ~/
* Run every time you make change to  bash_profile file……     ==> source ~/.bash_profile


1. Run the following to run MongoDB as a background service.
    brew services run mongodb-community

2. Open another terminal Cntrl + T and from Fruits DB directory,
  node app.js
  you should see this: Connnected successfully to server

3. to check if mongoDb is running
  brew services list

4. to stop running mongoDB
brew services stop mongodb-community

alias mongod='brew services run mongodb-community'
alias mongod-status='brew services list'
alias mongod-stop='brew services stop mongodb-community'

alias mongod-cli='mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork'
alias mongod-kill='sudo pkill -f mongod'

// deep work : book 2016
