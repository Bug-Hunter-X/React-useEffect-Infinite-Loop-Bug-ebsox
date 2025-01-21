```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: update count only once on mount
    let intervalId;
    // Only set the interval ID once to avoid multiple intervals
    if (!intervalId) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup function
    }
  }, []);

  return <div>Count: {count}</div>;
}
```