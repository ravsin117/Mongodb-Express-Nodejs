# SYNCHRONOUS AND ASYNCHRONOUS CODES

-synchronous codes also called -> blocking code. bcz for slow operations code might wait for the task to to be completed first.

-solution to this problem is asynchronous code -> non blocking code.

-we assign the heavy work(such as loading some files to be done in background).

-when the work is done the callack function which was used registered before is called to handle the result.

-During the time this heavy task was being done the rest of the code runs so there is no blocking of the rest of the code in this case.

Whats the problem with blocking the code ?
Node.js process in which our app is running , there is only 1 single thread . thread is just like a set of instruction. This thread is where our code actually executes . Node js is single threaded .

all users accessing our app are using the same single thread (at a same place where computer is running the applications.)

when one user locks the thread with synch code that might cause problem for other users in terms of assecibility .
even for one sec if the thread is blocked other users would have to wait for thread to be cleared inorder to perform even simpler tasks . Thisso we must avoid these kinds of situation by using asynch code . 





