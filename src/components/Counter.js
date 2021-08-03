import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "./../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(76));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleShowCounter());
  };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter {counter}</h1>
      {show && <div className={classes.value}>w{counter}w</div>}
      <div>
        {console.log(counter)}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
