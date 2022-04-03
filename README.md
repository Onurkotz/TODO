# WWYDT?

## To Do App

<img src="./screenShot/SS.png" style="width: 400px; height: 350px">


## WHICH LANGUAGES DOES APP USE?

- Uses ReactJS and Redux.

## WHICH LIBRARY AND PACKAGES WAS USED IN THIS APP? 

- This project was developed using by ReactJS and ReduxJS for state management.
- The one of the packages which was used in this app is **"Lodash"**.
- By importing **"throttle"** under the **lodash/throttle**, we avoid that our state is updated many times within a second, localStorage will be updated too many time.
- **throttle()* function has two parametres. 
    - First is **saveState()** funciton that imported from ./localStorage.js.
    - Second parametre is the time in type of millisecond.
- With **throttle(firstParam, time)** we throttles the function calls to 1 second. So that **saveState()** is called only once per second parametres.