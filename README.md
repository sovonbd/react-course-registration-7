## Course Registration

### Features used in this project
- When you click on the select button, it will add the course name, credit hours and course price in the cart.
- if you select same course more than once, it will show an alert and refuse to add it.
- the cart section can calculate the total course cost, total and remaining credit hours.

### Process to manage the states
In this project, states are managed using the useState hook. Here is a summary of how each state is managed.

1. 'cards' state:
- Initialized as an empty array using useState([]).
- Populated with data fetched from "data.json" using the useEffect hook.

1. cartItem state:
- Initialized as an empty array using useState([]).
- Updated when a card is selected and added to the cart using the handleSelect function.

1. 'cartPrice' state:
- Initialized with a value of 0 using useState(0).
- Incremented when a card is added to the cart using the handleSelect function.

1. 'remCredit' state:
- Initialized with a value of 20 using useState(20).
- Decremented when a card is selected based on its credit hours in the handleSelect function.

1. 'totalCredit' state:
- Initialized with a value of 0 using useState(0).
- Incremented when a card is selected based on its credit hours in the handleSelect function.

These states help manage the course registration process, keeping track of selected courses, their prices, remaining credit hours, and the total credit hours selected by the user. When a card is selected, these states are updated accordingly to provide feedback and ensure that the user does not exceed their available credit hours. Additionally, the 'ToastContainer' from the [react-toastify](https://www.npmjs.com/package/react-toastify) library is used to display notifications based on certain conditions, such as attempting to add a course that's already in the cart or exceeding available credit hours.