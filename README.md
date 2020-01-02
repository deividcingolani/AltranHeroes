# AltranHeroes
This is an application that provides gnomes information
PROJECT Altran Heroes

This is an application for a team who is playing a fantasy role-playing game and every time the heroes they play arrive at a town, they have the issue. They don't know the local population and what they can do to help them on their adventures.

For solution this issue, this app give they all information about gnomes of the city.
Versions

    [0.2] (19/12/2019) Beta -> (http://altran.herokuapp.com/) .
    [0.1] (17/12/2019) Beta.

LICENSE

    https://github.com/deividcingolani/AltranHeroes/blob/master/LICENSE

fixs and functionalities to Add

    When the select of City of Gnome change, it dont change nothing. This is because now there is a only city, but I think when there are more than 1 city.
    to Add backend of app, because with this there will be a posibily for add more gnome, edit and delete gnome.
    to Add backend for login each heroes and get his cities.
    to Fix select of Friends for mobile, because in some mobiles when is click in select, this dont show options, and sometimes when the options are showing dont do nothing. -To fix when is settings filters gender in url -To add profile of Heroe

Decision core

    how table of gnomes is responsive I was need take a decision about the count of column to show, and my decision was hidden the column about details of gnomes, because I think when a heroe is show the table, he need a quickly information about name and city of gnome, and the other information is more as details.

    To determine the gender of the gnomes, how do I have no information about the gender, Determine to use Fuction Math.Random for each gnome, and when it returns a number greater than 0.7 it is a female, and when the number is less than and equal to 0.7 It's male.

    For show the details of gnomes, I decide use a modal because is more easy for read the information and navigate between friends.

    For table, I use component React-Table because with this I can use pagination and ordering more easy and quicly, but filters are building outside of table because when if I try put the filters inside of my table there are showing in relation with header and is not clean for a quicly lecture.


Requirements

    Node Version v12.13.1

Install

$ git clone https://github.com/deividcingolani/AltranHeroes.git

$ cd AltranHeroes

$ npm install

$ npm start


Simple build for production
$ npm run build


