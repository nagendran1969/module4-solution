/*
Solution of assignment 4:

Expected output:

Hello Murali
Good Bye Jaishree
Good Bye Krishna
Good Bye Je
Hello Paul
Hello Mohan
Hello Kumar
Hello Peter
Hello Lisa
Good Bye Joseph
*/

(function() {
    var names = ["Murali", "Jaishree", "Krishna", "Jegan", "Paul", "Mohan", "Kumar", "Peter", "Lisa", "Joseph"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
