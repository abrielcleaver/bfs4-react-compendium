# Compendium (BFS4)
    - Due Dec 10, 2021
    - Netlify link -> https://abriels-compendium.netlify.app/
# Learning Objectives

    - Use the useEffect hook to fetch external data
    - Use .map to iterate over an array and render new elements for each item in an array.
    - Add a unique key to each element rendered from a .map in React.
    - Make an api request using the fetch api
    - Make an api request after a form submission in react
    - Update state with useEffect based on dropdown change
    - Conditionally render components based on state
### Description
* For this app, we’ll be using the useEffect react hook to fetch data inside of our applications and show the data to the user. The useEffect hook is the second most used react hook. It handles side effects that our app performs. Data fetching is one of these side effects. We’ll be learning the right way to use this hook to manage state in our applications that requires these side effects to happen. Some of the api requests we will do includes querying, filtering, and sorting our data.

    - Use the Alchemy Pokemon API in the example of these features
    - Use React template to start project.
### Acceptance Criteria
    [x] Users should be able to see a list of at least 10 characters when the page loads
    [ ] Users should see 5 character details on each character
    [ ] Users should be able to filter data from the api (Can use any type of filter from the api)
    [x] Users should be able to sort the data retrieved from the api
### Rubric
    [x] See a loading state while data is being fetched on page load	2
    [x] See a list of characters when the page loads	2
    [ ] Filter the data retrieved	2
    [ ] Conditionally render a loading state	2
    [ ] Make an api request with fetch and useEffect when page loads	2
    [ ] Add a key to each item rendered from data fetched	2
    [x] Update state with useEffect using empty dependency array	2
    [x] Update state with useEffect conditionally using dependency array	2
    [ ] Snapshot testing	2
    [x] Deployed on Netlify with passing CI	2


### Needs to be Completed:
- [x] write test for Controls component -- test passing 01/19 1:18pm
- [ ] write test for App.js