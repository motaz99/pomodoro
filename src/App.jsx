import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import TimerArea from './component/TimerArea';
import Footer from './component/Footer';
import Header from './component/Header';
import { db } from './firebase'; // Import updated Firestore instance
import { setPeriods as setTimerServicePeriods } from './services/timer';
import { doc, onSnapshot } from 'firebase/firestore'; // Import Firestore methods

const App = () => {
  const [shouldAutoStart, setShouldAutoStart] = useState(false);
  const periods = {
    longBrk: { id: 'Long Break', mins: 15, secs: 0 },
    shortBrk: { id: 'Short Break', mins: 5, secs: 0 },
    work: { id: 'Work', mins: 25, secs: 0 },
  };
  
  
  //const [periods, setPeriods] = useState(null);

  // useEffect(() => {
  //   // Reference the "timer" collection and "settings" document
  //   const settingsDocRef = doc(db, 'timer', 'settings');

  //   // Real-time listener using onSnapshot
  //   const unsubscribe = onSnapshot(settingsDocRef, (docSnapshot) => {
  //     if (docSnapshot.exists()) {
  //       const dbPeriods = docSnapshot.data().periods;
  //       setTimerServicePeriods(dbPeriods);
  //       setPeriods(dbPeriods);
  //     }
  //   });

  //   // Cleanup the listener on unmount
  //   return () => unsubscribe();
  // }, []);

  // if (!periods) {
  //   return (
  //     <Spinner className="spinner" animation="border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </Spinner>
  //   );
  // }

  const toggleShouldAutoStart = () => {
    setShouldAutoStart(!shouldAutoStart);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header
        onShouldAutoStartChange={toggleShouldAutoStart}
        shouldAutoStart={shouldAutoStart}
        periods={periods}
      />
      <Container fluid className="my-auto">
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <TimerArea shouldAutoStart={shouldAutoStart} periods={periods} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
