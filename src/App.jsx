import { useState, useEffect } from 'react'
import CardList from '/src/components/CardList.jsx'
import Scroll from '/src/components/Scroll.jsx'
import SearchBox from '/src/components/SearchBox.jsx'
import ErrorBoundry from '/src/components/ErrorBoundry.jsx'
import './App.css'

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setRobots(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRobots();
  }, []); // Empty dependency array means this runs once on mount

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      )}
    </div>
  );
}

export default App