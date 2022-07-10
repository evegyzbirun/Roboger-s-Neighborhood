## Mr.-Roboger-s-Neighborhood

#### by _**(Evgeny Zbirun)**_

#### The application replaces some input numbers with word(s).



#### the project link to github: https://github.com/evegyzbirun/Roboger-s-Neighborhood

## Technologies Used:
* VS code
* Git console
* JavaScript
* Html 

## Setup instructions

1. download from github link
2. unzip
3. open with Visual Studio Code or some other editor that reads Html, Css and JavaScript.
4. open index.html with live server.
5. input number.
6. Click submit to see the result.

## Known bugs
 non

## License

Copyright <2022> Evgeny Zbirun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Tests:
Describe: generateArray()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: generateArray("7");
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: generateArray("100");
Expected Output: [0, 1, 2, 3, 4, 5, 6, ... , 100]

Describe: outPut()

Code: outPut(); takes input from generateArray("1")
Test: if a number includes a 1 it should return Beep!
Expected Output:  0,"Beep!"

Code: outPut(); takes input from generateArray("2")
Test: if a number includes a 2 it should return Boop!
Expected Output:  0,"Beep!","Boop!"

Code: outPut(); takes input from generateArray("3")
Test: if a number includes a 3 it should return "Won't you be my neighbor?"
Expected Output:  0,"Beep!","Boop!","Won't you be my neighbor?"

Code: outPut(); takes input from generateArray("12")
Test: if number includes 1 and 2 it will return Boop!
Expected Output: 0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!"

Code: outPut(); takes input from generateArray("23")
Test: if number includes 2 and 3  it will return Boop!
Expected Output: 0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?"






