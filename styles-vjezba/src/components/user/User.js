import styles from './User.module.css' // upotreba modula je da se kreira ime style-a koje je unikatno za pojedinačnu komponentu

function User() {
    return (
        <h1 className={styles["user-text"]}>User Page</h1> //className nam služi da ubacimo CSS u JSX
    );
  }
  
  export default User;